import {
  Form,
  Modal,
  Input,
  Backdrop,
  Button,
  Svg,
  H3,
} from 'components/UtilsMarkup/UtilsMarkup.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDevices } from 'redux/devicesSlice';
import { createProject, updateProject } from 'redux/projectSlice';
import selectors from 'redux/selectors';
import { ButtonsPanel } from './ProjectOptions.styled';
import icons from 'image/icons.svg';
import { saveStoreToFile } from 'utils/saveToFile';

const ProjectOptions = ({ closeModal }) => {
  const dispatch = useDispatch();
  const currentProject = useSelector(selectors.getProject);
  const [project, setProject] = useState(currentProject);
  const [toggleCreate, setToggleCreate] = useState(false);

  const handleChange = e => {
    setProject(project => ({
      ...project,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!toggleCreate) dispatch(updateProject(project));
    if (toggleCreate) {
      dispatch(createProject(project));
      dispatch(clearDevices());
      setToggleCreate(false);
    }
    closeModal();
  };

  const handleCreateProject = () => {
    const reply = prompt(
      'This will clear your current project! Type "yes" if you sure',
      'no'
    )
      ?.trim()
      .toLowerCase();
    if (reply === 'yes') {
      if (
        window.confirm('Do you want to save your current project as a file?')
      ) {
        // Save it!
        saveStoreToFile();
      } else {
        if (
          !window.confirm('Create new project without saving the current one?')
        )
          return;
      }
      const now = new Date().toISOString();
      const id = now + nanoid();
      setProject({
        id: id,
        name: 'new project',
        info: '',
        date: now,
        owner: '',
      });
      setToggleCreate(true);
    }
  };

  return (
    <Backdrop>
      <Modal>
        <H3>{toggleCreate ? 'Create project' : 'Project options'}</H3>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <Svg height={16} width={16}>
              <use href={icons + '#icon-edit'} />
            </Svg>
            <Input
              name="name"
              id="name"
              value={project.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="info">
            Info
            <Svg height={16} width={16}>
              <use href={icons + '#icon-edit'} />
            </Svg>
            <Input
              name="info"
              id="info"
              value={project.info}
              onChange={handleChange}
            />
          </label>
          <ButtonsPanel>
            <Button type="submit">{toggleCreate ? 'Create' : 'Save'}</Button>
            <Button type="button" onClick={closeModal}>
              Cancel
            </Button>
            {!toggleCreate && (
              <Button type="button" onClick={handleCreateProject}>
                New project
              </Button>
            )}
          </ButtonsPanel>
        </Form>
      </Modal>
    </Backdrop>
  );
};

export default ProjectOptions;

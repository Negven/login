import React from 'react'
import Classes from './Menu.module.css'
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography'

const ExpansionPanel = withStyles({
    root: {
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
      backgroundColor: '#545A89',
      color: 'white'

    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: '#8A91C2',
      color: 'white',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);



  export default function Menu (props) {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    
    return(
        <div className={Classes.menu}>
            <div className={Classes.blockMenu}>
                <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Користувачі</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails  onClick={props.stateFunc.changeStateTeacher}>
                    <Typography>
                        Вчителі 
                    </Typography>
                  </ExpansionPanelDetails>
                  <ExpansionPanelDetails onClick={props.stateFunc.changeStateParents}>
                    <Typography >
                        Батьки
                    </Typography>
                  </ExpansionPanelDetails>
                  <ExpansionPanelDetails onClick={props.stateFunc.changeStateSchoolboys}>
                    <Typography>
                        Учні 
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Уроки</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails onClick={props.stateFunc.changeStateSchedule}>
                    <Typography >
                        Розклад уроків
                    </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                    <Typography>
                        Групування
                    </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                    <Typography>
                        План занять 
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Налаштування</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails onClick={props.stateFunc.changeStateType}>
                    <Typography>
                        Тип уроку
                    </Typography>
                  </ExpansionPanelDetails>
                  <ExpansionPanelDetails>
                    <Typography>
                        Предмет
                    </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                    <Typography>
                        Довідник посад
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4-header">
                    <Typography>Звіти</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                        Моніторинг
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    )

}

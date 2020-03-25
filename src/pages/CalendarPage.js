import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './demo-data/month-appointments';

const ExternalViewSwitcher = ({
    currentViewName,
    onChange,
  }) => (
    <RadioGroup
      aria-label="Views"
      style={{ flexDirection: 'row' }}
      name="views"
      value={currentViewName}
      onChange={onChange}
    >
      <FormControlLabel value="Week" control={<Radio />} label="Week" />
      <FormControlLabel value="Month" control={<Radio />} label="Month" />
    </RadioGroup>
  );

export default class CalendarPage extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
              data: appointments,
              currentViewName: 'Month',
            };
        
            this.commitChanges = this.commitChanges.bind(this);

            this.currentViewNameChange = (e) => {
                this.setState({ currentViewName: e.target.value });
              };
          }
        
          commitChanges({ added, changed, deleted }) {
            this.setState((state) => {
              let { data } = state;
              if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
              }
              if (changed) {
                data = data.map(appointment => (
                  changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
              }
              if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
              }
              return { data };
            });
    }
    
      render() {
        const { data, currentViewName } = this.state;
    
        return (
            <React.Fragment>

            <ExternalViewSwitcher
          currentViewName={currentViewName}
          onChange={this.currentViewNameChange}
        />
          <Paper>
            <Scheduler
              data={data}
            >
              <ViewState
                defaultCurrentDate={"2020-03-27"}
                currentViewName={currentViewName}
            />
            <WeekView
              startDayHour={10}
              endDayHour={19}
            />
              <MonthView />
              <EditingState
            onCommitChanges={this.commitChanges}
          />
              <Toolbar />
              <DateNavigator />
              <TodayButton />
              <Appointments />
              <AppointmentTooltip
                showCloseButton
                showOpenButton
                />
                <AppointmentForm/>
            </Scheduler>
          </Paper>
          </React.Fragment>
        );
      }
}

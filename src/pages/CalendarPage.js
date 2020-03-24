import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
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

export default class CalendarPage extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
              data: appointments
            };
        
            this.commitChanges = this.commitChanges.bind(this);
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
        const { data } = this.state;
    
        return (
          <Paper>
            <Scheduler
              data={data}
            >
              <ViewState
                defaultCurrentDate={"2020-03-27"}
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
        );
      }
}

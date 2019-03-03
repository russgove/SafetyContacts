import * as React from 'react';
import styles from './SafetyContactChart1.module.scss';
import { ISafetyContactChart1Props } from './ISafetyContactChart1Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SafetyContactChart1 extends React.Component<ISafetyContactChart1Props, {}> {
  public render(): React.ReactElement<ISafetyContactChart1Props> {
    return (
      <div className={ styles.safetyContactChart1 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

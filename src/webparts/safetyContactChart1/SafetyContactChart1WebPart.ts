import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SafetyContactChart1WebPartStrings';
import SafetyContactChart1 from './components/SafetyContactChart1';
import { ISafetyContactChart1Props } from './components/ISafetyContactChart1Props';

export interface ISafetyContactChart1WebPartProps {
  description: string;
}

export default class SafetyContactChart1WebPart extends BaseClientSideWebPart<ISafetyContactChart1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISafetyContactChart1Props > = React.createElement(
      SafetyContactChart1,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

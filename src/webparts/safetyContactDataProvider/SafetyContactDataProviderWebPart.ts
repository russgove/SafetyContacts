import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SafetyContactDataProviderWebPartStrings';
import SafetyContactDataProvider from './components/SafetyContactDataProvider';
import { ISafetyContactDataProviderProps } from './components/ISafetyContactDataProviderProps';

export interface ISafetyContactDataProviderWebPartProps {
  description: string;
}

export default class SafetyContactDataProviderWebPart extends BaseClientSideWebPart<ISafetyContactDataProviderWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISafetyContactDataProviderProps > = React.createElement(
      SafetyContactDataProvider,
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

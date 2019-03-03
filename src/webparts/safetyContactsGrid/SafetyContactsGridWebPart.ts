import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SafetyContactsGridWebPartStrings';
import SafetyContactsGrid from './components/SafetyContactsGrid';
import { ISafetyContactsGridProps } from './components/ISafetyContactsGridProps';

export interface ISafetyContactsGridWebPartProps {
  description: string;
}

export default class SafetyContactsGridWebPart extends BaseClientSideWebPart<ISafetyContactsGridWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISafetyContactsGridProps > = React.createElement(
      SafetyContactsGrid,
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


import React, { PureComponent } from 'react';
import { PanelProps, PanelPlugin, PanelEditorProps, PanelOptionsGroup,FormField } from '@grafana/ui';
import { AbsoluteTimeRange } from '@grafana/data';
import { State } from '@grafana/ui/components/TimePicker/TimePicker';
interface MyPanelOptions {
  url: string;
 

}


export class MyPanel extends PureComponent<PanelProps<MyPanelOptions>,State> {


  onChangeTimeRange = (timeRange: AbsoluteTimeRange) => {
      console.log("onChangeTimeRange")
  };


  constructor(props: Readonly<PanelProps<MyPanelOptions>>) {
    super(props);
  
  }
  componentDidUpdate(){

    console.log("component did update")

  }
  render() {
    console.log("render")
    console.log(this.props.timeRange.from)
    console.log(this.props.timeRange.to)
    console.log(this.props.timeRange.raw)
    console.log(this.props)
      return <div>{this.props.timeRange.raw.from} to {this.props.timeRange.raw.to} {this.props.options.url}</div>
  }

}
export class MyPanelEditor extends PureComponent<PanelEditorProps<MyPanelOptions>> {
  onUpdatePanel = (e: React.ChangeEvent<HTMLInputElement>) => ( this.props.onOptionsChange({ ...this.props.options ,url: e.target.value}));
  render() {
    return (
        <PanelOptionsGroup title="Options">
          <FormField label="URL" value={this.props.options.url} onChange={this.onUpdatePanel}></FormField>
        </PanelOptionsGroup>
       

    )
  }
}
export const plugin = new PanelPlugin(MyPanel);

plugin.setDefaults({

  url: "http://example.com",
 
  
})



plugin.setEditor(MyPanelEditor)
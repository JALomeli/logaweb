import Header from '../components/Header';
import { AccordionProps } from 'react-daisyui';
import Accordion from 'react-daisyui';

export default function Home() {

    const args= {
        defaultChecked: false,
        className: "bg-gray-100 text-gray-700 border border-gray-300 rounded shadow-sm p-2 my-2",
        titleClassName: "border-b border-gray-300 p-2",
        contentClassName: "border-b border-gray-300 p-2",
        arrowClassName: "text-gray-500",
        iconClassName: "text-gray-500",
        iconSize: 20,
        iconPosition: "left",
        iconCollapsed: "arrow",
        iconExpanded: "arrow",
        iconColor: "inherit",
        iconCollapsedColor: "inherit",
        iconExpandedColor: "inherit",
        iconStyle: {},
        iconCollapsedStyle: {},
        iconExpandedStyle: {},
        transition: "all 0.3s ease",
        onChange: () => {},
        children: "Content",
        // ...args
      };

        
    return (
        
        <main>
            <Header />
           {/* acordion */}
           <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>


        </main>
    );
}
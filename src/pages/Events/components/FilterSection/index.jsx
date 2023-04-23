import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '../Checkbox';
import ClearAllButton from './ClearAllButton';
import { Icon, IconIdentifier } from '..';
import './FilterSection.css';

const FilterSection = () => {
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      title: 'Registration Status',
      content: [
        { id: 1, label: 'Registrations Open', isChecked: false },
        { id: 2, label: 'Registrations Closed', isChecked: false },
        { id: 3, label: 'Marked as Interested', isChecked: false },
      ],
    },
    {
      id: 2,
      title: 'Clubs',
      content: [
        { id: 1, label: 'Art & Craft Club', isChecked: false },
        { id: 2, label: 'Cultural Club', isChecked: false },
        { id: 3, label: 'Human Values Club', isChecked: false },
        { id: 4, label: 'Literal Club', isChecked: false },
        { id: 5, label: 'Maths Club', isChecked: false },
        { id: 6, label: 'Management Club', isChecked: false },
        { id: 7, label: 'Publication Club', isChecked: false },
      ],
    },
    {
      id: 3,
      title: 'Event Category',
      content: [
        { id: 1, label: 'Competition', isChecked: false },
        { id: 2, label: 'Quizzes', isChecked: false },
        { id: 3, label: 'Seminar', isChecked: false },
        { id: 4, label: 'Workshop', isChecked: false },
      ],
    },
  ]);

  const handleClearAll = () => {
    const newData = accordionData.map((accordion) => ({
      ...accordion,
      content: accordion.content.map((checkbox) => ({
        ...checkbox,
        isChecked: false,
      })),
    }));

    setAccordionData(newData);
  };

  const [activeKey, setActiveKey] = useState(
    accordionData.map((accordion) => `${accordion.id}`),
  );

  const toggleAccordion = (id) => {
    setActiveKey((prev) =>
      prev.includes(id) ? prev.filter((key) => key !== id) : [...prev, id],
    );
  };

  return (
    <div className="sag-filter__section">
      <div className="sag-filter__header">
        <div className="sag-filter__text">Filter</div>
        <ClearAllButton onClick={handleClearAll} />
      </div>
      <Accordion
        className="sag-filter"
        activeKey={activeKey}
        onSelect={toggleAccordion}
      >
        {accordionData.map((accordion) => (
          <Accordion.Item
            className="sag-filter__item"
            key={accordion.id}
            eventKey={`${accordion.id}`}
          >
            <Accordion.Header>
              {' '}
              {accordion.title}
              <Icon
                className="sag-filter__chevron-icon"
                iconIdentifier={
                  activeKey.includes(`${accordion.id}`)
                    ? IconIdentifier.ChevronUp
                    : IconIdentifier.ChevronDown
                }
              />
            </Accordion.Header>
            <Accordion.Body className="sag-filter__body">
              {accordion.content.map((checkbox) => (
                <Checkbox
                  key={checkbox.id}
                  label={checkbox.label}
                  checked={checkbox.isChecked}
                  onChange={() => {
                    const newData = accordionData.map((a) => {
                      if (a.id === accordion.id) {
                        return {
                          ...a,
                          content: a.content.map((c) => {
                            if (c.id === checkbox.id) {
                              return {
                                ...c,
                                isChecked: !c.isChecked,
                              };
                            }
                            return c;
                          }),
                        };
                      }
                      return a;
                    });

                    setAccordionData(newData);
                  }}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterSection;

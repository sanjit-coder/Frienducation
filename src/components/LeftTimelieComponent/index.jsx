'use client'

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import AccordionIcon from '@/assets/images/icons/coursesHeroSection/accordionIcon';
import expandIcon from "@/assets/images/icons/coursesHeroSection/expandIcon.svg";
import Image from 'next/image';
import CoursesModule from '../CoursesModule';

export default function LeftAlignedTimeline({ courseContent }) {
  const [data, setData] = React.useState([]);
  const [expandIconClick, setExpandIconClick] = React.useState(false);

  React.useEffect(() => {
    setData(courseContent?.slice(0, 1));
  }, [courseContent])

  React.useEffect(() => {
    if (expandIconClick) {
      setData(courseContent);
      return;
    }
    setData(courseContent?.slice(0, 1));
  }, [expandIconClick])

  return (
    <div className='timelineMainWrapperClass'>
      <Timeline className='timelineContainer' position="right">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className='timeLineDotFirst' />
            <TimelineConnector className='timeLineConnectorHeight' />
          </TimelineSeparator>
          <TimelineContent>
            <div className='divTimelineContentFirst'>
              <div>
                <div className='courseContentTextClass'>
                  Courses Content
                </div>
                <div className='subCourseContentTextClass'>
                  12 modules | 101 Lessons | 9hr 9m
                </div>
              </div>
              <div className='subCourseContentTextClass' onClick={() => setExpandIconClick(!expandIconClick)}>
                <Image src={expandIcon} alt="expandIcon" />
                Expand all section
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        {data?.map((ele, index) => {
          return (
            <TimelineItem >
              <TimelineSeparator>
                <TimelineDot className='timeLineDotFirst' />
                {data?.length > index + 1 && <TimelineConnector className='timeLineConnectorHeight' />
                }
              </TimelineSeparator>
              <TimelineContent className='lastTimelineContent'>
                <CoursesModule items={ele} />
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  );
}
'use client'

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';

export default function AlternateReverseTimeline({ roadmap }) {
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);
  const isMobile = viewportWidth <= 768; // You can adjust this threshold as needed

  const getEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  }
  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center', textAlign: 'center'
    }}>
      {!isMobile && <Typography className='roadmapSecond'>Roadmap</Typography>
      }
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector className='alternateReverseTimeline' />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className='textFirst'></Typography>
          </TimelineContent>
        </TimelineItem>
        {roadmap?.map((ele, index) => {
          return (
            < TimelineItem>
              <TimelineSeparator>
                <TimelineDot className='dotSize' />
                <TimelineConnector className='alternateReverseTimelineThird' />
              </TimelineSeparator>
              <TimelineContent sx={{ alignItems: getEven(index + 1) ? 'flex-end' : 'flex-start' }} className='timelineContent'>
                <Typography className='textFirst'>{`${index + 1}. ${ele?.title}`}</Typography>
                <Typography className='textSecond'>{ele?.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div >
  );
}
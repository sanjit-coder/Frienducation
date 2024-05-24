import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccordionIcon from "@/assets/images/icons/coursesHeroSection/accordionIcon";

export default function BasicAccordion({ FAQS }) {
  return (
    <div>
      {FAQS?.length > 0 && FAQS?.map((ele) => {
        return (
          <Accordion sx={{ backgroundColor: '#0080CF', color: '#ffffff', marginBottom: "4px" }}>
            <AccordionSummary
              sx={{ paddingTop: "7px", paddingBottom: "7px" }}
              expandIcon={<AccordionIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{ele?.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{ele?.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
      {/* <Accordion sx={{ backgroundColor: '#0080CF', color: '#ffffff', marginBottom: "4px" }}>
        <AccordionSummary
          sx={{ paddingTop: "7px", paddingBottom: "7px" }}
          expandIcon={<AccordionIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Which plan should i take ? Basic, Standard, or Premium ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#0080CF', color: '#ffffff', marginBottom: "4px" }}>
        <AccordionSummary
          sx={{ paddingTop: "7px", paddingBottom: "7px" }}
          expandIcon={<AccordionIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Where will be the classes be conducted ? what are the course timing ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#0080CF', color: '#ffffff', marginBottom: "4px" }}>
        <AccordionSummary
          sx={{ paddingTop: "7px", paddingBottom: "7px" }}
          expandIcon={<AccordionIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is there a free trail available ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#0080CF', color: '#ffffff', marginBottom: "4px" }}>
        <AccordionSummary
          sx={{ paddingTop: "7px", paddingBottom: "7px" }}
          expandIcon={<AccordionIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>our teacher is always available to help you and clear your concept for doubt free.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
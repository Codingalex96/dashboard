import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>FAQ</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is this dashboard for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This dashboard helps monitor sales, revenue, and traffic for the restaurant.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I add new data?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>You can add new data via the restaurant's backend system.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
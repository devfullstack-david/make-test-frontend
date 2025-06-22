import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import { QuestionProps } from '@/types/components/questions';

const Questions = (props: QuestionProps) => {
  return (
    <Accordion
        sx={{
            backgroundColor: 'var(--primary)',
            width: '50%',
            color: 'white',
        }}
    >
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon color={"action"} />}
            aria-controls='panel1-content'
        >
            <Typography fontWeight={"bold"} component={"span"}>{props.question} </Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography color='white'>
                {props.answer}
            </Typography>
        </AccordionDetails>
    </Accordion>
  )
}

export default Questions
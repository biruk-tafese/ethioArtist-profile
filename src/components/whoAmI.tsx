import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import image2 from '../assets/photos/Endga_2.jpg';
import image3 from '../assets/photos/Endga_3.jpg';
import image4 from '../assets/photos/Endga_4.jpg';
import image5 from '../assets/photos/Endga_5.jpg';
import image6 from '../assets/photos/Endga_6.jpg';

const steps = [
  {
    label: 'Introduction',
    description: `ENGEDASEW HABTE is in charge of our company as a leading actor, Producer, assistant director, story developer, and General Manager.
    
His visionary approach has redefined modern entertainment, inspiring both audiences and industry peers alike.`,
    image: image2,
  },
  {
    label: 'Career Start',
    description: `Engedasew began his career in the production industry before 2005. Since then, he has been acting and producing movies, TV shows, and TV commercials.
    
His early years were marked by perseverance, creativity, and a passion for storytelling that set the foundation for a remarkable career.`,
    image: image3,
  },
  {
    label: 'Major Works',
    description: `He has been involved in more than 40 feature films, over 25 TV commercials, and various TV shows on EBS Television.
    
His dynamic roles and exceptional performances have captivated audiences and earned him a reputation as a versatile talent.`,
    image: image4,
  },
  {
    label: 'Awards & Recognition',
    description: `Throughout his career, Engedasew has won 5 local awards along with several international recognitions and certificates.
    
These accolades highlight his commitment to excellence and his significant contributions to the entertainment industry.`,
    image: image5,
  },
  {
    label: 'Personal Details',
    description: `Full Name: Engedasew Habte Denberu
Stage Name: Tedy
Date of Birth: January 1, 1985
Gender: Male
Nationality: Ethiopian
City of Residence: Addis Ababa, Ethiopia
Contact Information: For inquiries, please visit our contact page.`,
    image: image6,
  },
];

export default function WhoAmI() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: '1rem' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography sx={{ whiteSpace: 'pre-line', mb: 2 }}>
                {step.description}
              </Typography>
              {/* Image for the step */}
              <Box sx={{ mb: 2 }}>
                <img
                  src={step.image}
                  alt={step.label}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={
                    index === steps.length - 1 ? handleReset : handleNext
                  }
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

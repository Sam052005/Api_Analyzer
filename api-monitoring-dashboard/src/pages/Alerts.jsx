import { Box, Typography } from '@mui/material';

const Alerts = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Alerts
      </Typography>
      <Typography>
        System alerts and notifications will appear here.
      </Typography>
    </Box>
  );
};

export default Alerts;
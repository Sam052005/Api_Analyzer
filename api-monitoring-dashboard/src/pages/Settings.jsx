import { Box, Typography } from '@mui/material';

const Settings = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography>
        Application configuration settings will appear here.
      </Typography>
    </Box>
  );
};

export default Settings;
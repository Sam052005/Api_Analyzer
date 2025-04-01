import { Box, Typography, List, ListItem, ListItemIcon } from '@mui/material'
import { Warning, Error, Info } from '@mui/icons-material'

const severityIcons = {
  high: <Error color="error" />,
  medium: <Warning color="warning" />,
  low: <Info color="info" />
}

const AiInsights = ({ insights }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        AI Insights
      </Typography>
      <List dense>
        {insights.map((insight, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {severityIcons[insight.severity]}
            </ListItemIcon>
            <Box>
              <Typography variant="subtitle2">{insight.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {insight.description}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default AiInsights
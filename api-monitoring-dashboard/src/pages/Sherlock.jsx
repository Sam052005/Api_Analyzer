import { 
    Box, 
    Typography, 
    Avatar, 
    Card, 
    CardContent, 
    Grid,
    Button,
    TextField,
    List,
    ListItem,
    ListItemText,
    IconButton,
    useTheme,
    Paper,
    Badge
  } from '@mui/material';
  import { 
    TheaterComedy, 
    Search, 
    LocalPolice,
    Send,
    Close
  } from '@mui/icons-material';
  import { useState, useRef, useEffect } from 'react';
  
  const Sherlock = () => {
    const theme = useTheme();
    
    // Updated to dark/blue theme colors
    const colors = {
      primary: '#1976d2',        // Blue primary color
      secondary: '#64b5f6',      // Lighter blue for secondary
      accent: '#4fc3f7',         // Bright blue for accent
      background: '#121212',     // Dark background
      paper: '#1e1e1e',          // Slightly lighter dark for paper
      textPrimary: '#ffffff',    // White text
      textSecondary: '#bbbbbb',  // Light gray text
      border: '#424242'          // Dark gray border
    };
  
    const [messages, setMessages] = useState([
      { 
        text: "Greetings! I'm Sherlock Holmes, at your service. What API mystery shall we unravel today?", 
        sender: 'bot',
        timestamp: new Date()
      },
      { 
        text: "Try asking me about error patterns, performance issues, or security concerns in your API.", 
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  
    const [input, setInput] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const messagesEndRef = useRef(null);
  
    const detectiveTools = [
      {
        name: "API Magnifier",
        icon: <Search sx={{ fontSize: 40, color: colors.secondary }} />,
        description: "Examine request/response patterns in microscopic detail",
        responses: [
          "The magnifier reveals your payload sizes increase by 300% during peak hours",
          "Observe these malformed JSON requests from client 192.168.1.42",
          "The response times correlate strongly with database query complexity"
        ]
      },
      {
        name: "Anomaly Detector",
        icon: <TheaterComedy sx={{ fontSize: 40, color: colors.secondary }} />,
        description: "Identify unusual patterns in API behavior",
        responses: [
          "Elementary! The 500 errors occur precisely at 2:17 AM daily",
          "This is most suspicious - the auth failures always precede cache misses",
          "Notice how the latency spikes coincide with third-party API calls"
        ]
      },
      {
        name: "Security Inspector",
        icon: <LocalPolice sx={{ fontSize: 40, color: colors.secondary }} />,
        description: "Uncover vulnerabilities and breaches",
        responses: [
          "The game is afoot! I've detected brute force attempts on /login",
          "These JWT tokens lack proper expiration claims",
          "The CORS policy is dangerously permissive for sensitive endpoints"
        ]
      }
    ];
  
    const handleSendMessage = () => {
      if (input.trim() === '') return;
  
      const userMsg = { 
        text: input, 
        sender: 'user',
        timestamp: new Date() 
      };
      setMessages([...messages, userMsg]);
      setInput('');
  
      setTimeout(() => {
        let response = "Fascinating! The data suggests...";
        
        detectiveTools.forEach(tool => {
          if (input.toLowerCase().includes(tool.name.toLowerCase())) {
            response = tool.responses[Math.floor(Math.random() * tool.responses.length)];
          }
        });
  
        if (input.toLowerCase().includes('error') || input.toLowerCase().includes('fail')) {
          response = "A capital mistake! The errors occur because " + [
            "of missing required headers",
            "the database connection times out",
            "of invalid payload formatting"
          ][Math.floor(Math.random() * 3)];
        } else if (input.toLowerCase().includes('slow') || input.toLowerCase().includes('latency')) {
          response = "The performance degradation stems from " + [
            "unoptimized database queries",
            "lack of response caching",
            "third-party API bottlenecks"
          ][Math.floor(Math.random() * 3)];
        }
  
        const botMsg = { 
          text: response,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMsg]);
        if (!isChatOpen) setUnreadCount(prev => prev + 1);
      }, 1000 + Math.random() * 2000);
    };
  
    const handleChatToggle = () => {
      setIsChatOpen(!isChatOpen);
      if (isChatOpen === false) setUnreadCount(0);
    };
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    return (
      <Box sx={{ 
        p: 4, 
        mt: 2,
        backgroundColor: colors.background,
        minHeight: 'calc(100vh - 64px)',
        position: 'relative'
      }}>
        {/* Main Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 4,
          gap: 3,
          backgroundColor: colors.paper,
          p: 4,
          borderRadius: '12px',
          border: `1px solid ${colors.border}`,
          boxShadow: theme.shadows[4]
        }}>
          <Avatar sx={{ 
            bgcolor: colors.primary,
            width: 80, 
            height: 80,
            boxShadow: `0 0 0 4px ${colors.paper}, 0 0 24px ${colors.primary}`
          }}>
            <TheaterComedy sx={{ fontSize: 48 }} />
          </Avatar>
          <Box>
            <Typography variant="h3" sx={{ 
              fontWeight: 700,
              fontFamily: '"Cinzel", serif',
              color: colors.secondary,
              letterSpacing: '1px',
              textShadow: theme.shadows[2]
            }}>
              Sherlock
            </Typography>
            <Typography variant="h5" sx={{ 
              color: colors.textSecondary,
              fontStyle: 'italic'
            }}>
              API Investigation Toolkit
            </Typography>
          </Box>
        </Box>
  
        {/* Investigation Tools Grid */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {detectiveTools.map((tool, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                transition: 'all 0.3s',
                backgroundColor: colors.paper,
                border: `1px solid ${colors.border}`,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.shadows[8],
                  borderColor: colors.secondary
                }
              }}>
                <CardContent sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 4,
                  gap: 2,
                  height: '100%'
                }}>
                  <Box sx={{
                    p: 2,
                    bgcolor: colors.background,
                    borderRadius: '50%',
                    border: `2px solid ${colors.primary}`
                  }}>
                    {tool.icon}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 600,
                    color: colors.secondary,
                    fontFamily: '"Cinzel", serif'
                  }}>
                    {tool.name}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2,
                    color: colors.textSecondary,
                    flexGrow: 1
                  }}>
                    {tool.description}
                  </Typography>
                  <Box sx={{ 
                    p: 2,
                    bgcolor: theme.palette.action.hover,
                    borderRadius: '8px',
                    width: '100%',
                    border: `1px solid ${colors.primary}`
                  }}>
                    <Typography variant="body2" sx={{ 
                      fontStyle: 'italic',
                      color: colors.secondary
                    }}>
                      "{tool.responses[0]}"
                    </Typography>
                  </Box>
                  <Button 
                    variant="outlined" 
                    sx={{ 
                      mt: 2,
                      color: colors.secondary,
                      borderColor: colors.secondary,
                      '&:hover': {
                        backgroundColor: theme.palette.action.selected,
                        borderColor: colors.secondary,
                        color: colors.secondary
                      }
                    }}
                    onClick={() => {
                      setMessages([...messages, {
                        text: `Tell me about ${tool.name.toLowerCase()}`,
                        sender: 'user',
                        timestamp: new Date()
                      }]);
                      setIsChatOpen(true);
                    }}
                  >
                    Consult Sherlock
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
  
        {/* Chatbot Interface */}
        {isChatOpen ? (
          <Paper elevation={24} sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            width: 350,
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: colors.paper,
            borderRadius: '12px 12px 0 0',
            overflow: 'hidden',
            border: `2px solid ${colors.primary}`,
            zIndex: theme.zIndex.modal,
            boxShadow: theme.shadows[16]
          }}>
            <Box sx={{
              bgcolor: colors.primary,
              color: colors.textPrimary,
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TheaterComedy />
                <Typography variant="h6" sx={{ fontFamily: '"Cinzel", serif' }}>
                  Sherlock's Notebook
                </Typography>
              </Box>
              <IconButton 
                onClick={handleChatToggle} 
                size="small" 
                sx={{ 
                  color: colors.textPrimary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                <Close />
              </IconButton>
            </Box>
  
            <Box sx={{ 
              flexGrow: 1, 
              overflowY: 'auto',
              p: 2,
              backgroundColor: colors.background
            }}>
              <List sx={{ pt: 0 }}>
                {messages.map((msg, index) => (
                  <ListItem key={index} sx={{ 
                    display: 'flex',
                    flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                    p: 1,
                    alignItems: 'flex-start'
                  }}>
                    <Avatar sx={{ 
                      width: 32, 
                      height: 32,
                      bgcolor: msg.sender === 'user' ? colors.accent : colors.primary,
                      fontSize: '1rem',
                      mr: msg.sender === 'bot' ? 1 : 0,
                      ml: msg.sender === 'user' ? 1 : 0
                    }}>
                      {msg.sender === 'user' ? 'You' : 'SH'}
                    </Avatar>
                    <Paper elevation={3} sx={{
                      p: 1.5,
                      maxWidth: '70%',
                      bgcolor: msg.sender === 'user' 
                        ? theme.palette.grey[800] 
                        : theme.palette.grey[700],
                      color: colors.textPrimary,
                      borderRadius: msg.sender === 'user' 
                        ? '18px 18px 0 18px' 
                        : '18px 18px 18px 0',
                      border: msg.sender === 'bot' 
                        ? `1px solid ${colors.primary}` 
                        : 'none'
                    }}>
                      <ListItemText 
                        primary={msg.text} 
                        primaryTypographyProps={{
                          fontSize: '0.9rem'
                        }}
                      />
                      <Typography variant="caption" sx={{
                        display: 'block',
                        textAlign: 'right',
                        color: colors.textSecondary,
                        fontSize: '0.7rem'
                      }}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </Typography>
                    </Paper>
                  </ListItem>
                ))}
                <div ref={messagesEndRef} />
              </List>
            </Box>
  
            <Box sx={{ 
              p: 2, 
              borderTop: `1px solid ${colors.border}`,
              bgcolor: colors.paper
            }}>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Consult Sherlock about your API..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: colors.textPrimary,
                        '& fieldset': {
                          borderColor: colors.primary,
                        },
                        '&:hover fieldset': {
                          borderColor: colors.secondary,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: colors.secondary,
                        }
                      },
                      '& .MuiInputLabel-root': {
                        color: colors.textSecondary,
                      }
                    }}
                  />
                  <IconButton 
                    type="submit"
                    sx={{ 
                      color: colors.secondary,
                      '&:hover': {
                        color: colors.secondary,
                        backgroundColor: theme.palette.action.hover
                      }
                    }}
                  >
                    <Send />
                  </IconButton>
                </Box>
              </form>
            </Box>
          </Paper>
        ) : (
          <Badge 
            badgeContent={unreadCount} 
            color="secondary"
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Button
              variant="contained"
              onClick={handleChatToggle}
              sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                bgcolor: colors.primary,
                color: colors.textPrimary,
                borderRadius: '50%',
                minWidth: '60px',
                height: '60px',
                '&:hover': {
                  bgcolor: colors.accent,
                  transform: 'scale(1.1)',
                  boxShadow: theme.shadows[8]
                },
                transition: 'all 0.3s'
              }}
            >
              <TheaterComedy fontSize="large" />
            </Button>
          </Badge>
        )}
      </Box>
    );
  };
  
  export default Sherlock;
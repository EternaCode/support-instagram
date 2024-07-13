import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Helmet } from 'react-helmet';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const LineBreaker = () => {
    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [savedTexts, setSavedTexts] = useState([]);

    useEffect(() => {
        const storedTexts = JSON.parse(localStorage.getItem('savedTexts')) || [];
        setSavedTexts(storedTexts);
    }, []);

    const handleChange = (event) => {
        setText(event.target.value);
        setCharCount(event.target.value.length);
    };

    const handleCopy = () => {
        let textToCopy = text.replace(/\u2800/g, '\u2800\n').trimStart();
        if (!textToCopy.startsWith('\u2800\n')) {
            textToCopy = `\u2800\n${textToCopy}`;
        }
        navigator.clipboard.writeText(textToCopy);
        alert('Copied');

        const newSavedTexts = [...savedTexts, text];
        setSavedTexts(newSavedTexts);
        localStorage.setItem('savedTexts', JSON.stringify(newSavedTexts));
    };

    const handleLoad = (savedText) => {
        setText(savedText);
        setCharCount(savedText.length);
    };

    const handleDelete = (index) => {
        const newSavedTexts = savedTexts.filter((_, i) => i !== index);
        setSavedTexts(newSavedTexts);
        localStorage.setItem('savedTexts', JSON.stringify(newSavedTexts));
    };

    return (
        <Box className="container" sx={{ p: 2 }}>
            <Helmet>
                <title>Instagram Line Breaker - First Line Break for Instagram Captions</title>
                <meta name="description" content="Easily add line breaks to your Instagram captions with our Instagram Line Breaker tool. Perfect for creating aesthetically pleasing and readable Instagram posts." />
                <meta name="keywords" content="Instagram, line break, caption, Instagram tool, Instagram captions, Instagram formatting" />
                <meta name="author" content="Your Name or Your Website Name" />

                <meta property="og:title" content="Instagram Line Breaker - First Line Break for Instagram Captions" />
                <meta property="og:description" content="Easily add line breaks to your Instagram captions with our Instagram Line Breaker tool. Perfect for creating aesthetically pleasing and readable Instagram posts." />
                <meta property="og:image" content="URL to an image representing your site" />
                <meta property="og:url" content="https://support-instagram.github.io" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instagram Line Breaker - First Line Break for Instagram Captions" />
                <meta name="twitter:description" content="Easily add line breaks to your Instagram captions with our Instagram Line Breaker tool. Perfect for creating aesthetically pleasing and readable Instagram posts." />
                <meta name="twitter:image" content="URL to an image representing your site" />
            </Helmet>
            <Box className="textarea-section" sx={{ mb: 2 }}>
                <Typography variant="h5" gutterBottom>
                    First Line Break for Instagram Captions
                </Typography>
                <TextField
                    id="textarea"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={10}
                    value={text}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleCopy} sx={{ mb: 2 }}>
                    Copy to Clipboard
                </Button>
                <Typography className="char-count">
                    Max Length — {charCount} of 2200
                </Typography>
            </Box>
            {savedTexts.length > 0 && (
                <Box className="saved-texts" sx={{ mt: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Saved Texts
                    </Typography>
                    <List>
                        {savedTexts.map((savedText, index) => (
                            <ListItem key={index} divider>
                                <ListItemText primary={savedText} />
                                <IconButton edge="end" aria-label="load" onClick={() => handleLoad(savedText)}>
                                    <FileCopyIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    );
};

export default LineBreaker;

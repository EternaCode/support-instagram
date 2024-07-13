import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import Adsense from './Adsense';
import LineBreaker from './LineBreaker';

function App() {
    const [activePage, setActivePage] = useState('newline');

    const handleMenuClick = (page) => {
        setActivePage(page);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        SUPPORT.INSTAGRAM
                    </Typography>
                    <Button color="inherit" onClick={() => handleMenuClick('newline')}>개행</Button>
                </Toolbar>
            </AppBar>
            <Container>
                {activePage === 'newline' && <LineBreaker />}
                <Adsense />
            </Container>
        </div>
    );
}

export default App;

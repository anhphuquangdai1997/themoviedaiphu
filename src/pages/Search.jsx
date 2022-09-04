import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'

const Search = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff',

            }
        }
    })


    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: '15px 0' }}>
                    <TextField
                        style={{ flex: 1 }}
                        className='searchBox'
                        label='Search'
                        variant='filled'
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button variant='container' style={{ marginLeft: 10 }}><SearchIcon /></Button>
                </div>
                <Tabs value={type} indicatorColor='primary' textColor='primary' onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1)
                }}
                    style={{ paddingBottom: 5 }}>
                    <Tab style={{ width: '50%' }} label='Search Movie' />
                    <Tab style={{ width: '50%' }} label='Search TV' />
                </Tabs>
            </ThemeProvider>

        </div>
    )
}

export default Search

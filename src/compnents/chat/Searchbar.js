import '../../CSS/Searchbar.css'
import React from 'react'
import { Box, InputBase } from '@mui/material';
import { Search, FilterList } from '@mui/icons-material'

export default function Searchbar() {
    return (
        <>
            <Box className='searchouter'>
                <Box>
                    <Search className='search' />
                    <InputBase className='input' style={{fontSize: '12px'}} placeholder='Search or start new chat' />
                </Box>
                <Box>
                    <FilterList className='filter' />
                </Box>
            </Box>
        </>
    )
}

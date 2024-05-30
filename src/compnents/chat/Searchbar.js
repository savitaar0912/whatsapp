import '../../CSS/Searchbar.css'
import React from 'react'
import { Box, InputBase } from '@mui/material';
import { Search, FilterList } from '@mui/icons-material'

export default function Searchbar({ setText }) {
    return (
        <>
            <Box className='searchouter'>
                <Box>
                    <Search className='search' />
                    <InputBase className='input' style={{ fontSize: '12px' }}
                        placeholder='Search or start new chat'
                        onChange={(e) => setText(e.target.value) }
                    />
                </Box>
                <Box>
                    <FilterList className='filter' />
                </Box>
            </Box>
        </>
    )
}

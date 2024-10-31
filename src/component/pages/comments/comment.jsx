import { useState } from 'react'
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    ListItem,
    Typography,
} from '@mui/material'
import getTimeSinceComment from '../../../utils/getTimeSinceComment'
import data from '../../../../data.json';

const Comment = (props) => {

    const {comment} = props
    const {content,createdAt, user: { image, username },} = comment
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const timeAgo = getTimeSinceComment(createdAt)


    return (
        <ListItem
            sx={{ flexDirection: 'column', alignItems: 'stretch', rowGap: 1 , }}
        >
            <Card
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row-reverse' },
                    borderRadius: 3,
                    p: { md: 1 },
                    width: 'auto',
                    boxShadow: 'none',
                }}
                component='form'
            >
                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <CardHeader
                        sx={{
                            '& .MuiCardHeader-content': {
                                display: 'flex',
                                flexWrap: 'wrap',
                                columnGap: 2,
                               
                            },
                        }}
                        avatar={<Avatar src={image.png} />}
                        title={
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                }}
                                color='textSecondary'
                            >
                                {username}
                            </Typography>
                        }
                        subheader={<Typography>{timeAgo}</Typography>}
                    />
                    <CardContent
                        sx={{
                            pt: 0,
                            '&:last-child': {
                                pb: 2,
                                direction: 'rtl'
                            },
                        }}
                    >
                            <Typography sx={{ overflowWrap: 'anywhere', textAlign: 'right'}}>
                                {content}
                            </Typography>   
                    </CardContent>
                </Box>

                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: { sm: 'start' },
                        p: 2,
                        pt: { xs: 0, sm: 2 },
                        pr: { sm: 0, md: 1 },
                    }}
                >   
                </CardActions>
            </Card>
        </ListItem>
    )
}

export default Comment

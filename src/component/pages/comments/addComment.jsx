import { Avatar, Button, Card, CardContent, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const AddComment = (props) => {
    var { addComment, currentUser } = props
    const { image } = currentUser

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const id = crypto.randomUUID()
        const content = form.content.value
        const createdAt = new Date()

        const newComment = {
            id,
            content,
            createdAt,
            score: 0,
            user: currentUser,
            replies: [],
        }

        addComment(newComment)

        form.reset()
    }

    return (
        <Card
            onSubmit={handleSubmit}
            sx={{
                mx: 2,
                borderRadius: 3,
                p: { md: 1 },
                boxShadow: 'none',
            }}
            component='form'
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <TextField
                    sx={{
                        flexGrow: 1,
                        width: { xs: '100%', sm: 'auto' , fontWeight:"900"},
                    }}
                    label='نظر خود را اضافه کنید'
                    multiline
                    maxRows={5}
                    minRows={2}
                    name='content'
                    required
                />
                <Avatar
                    sx={{
                        order: { sm: '-1' },
                    }}
                    src={image.png}
                />
                <Button
                    size='large'
                    type='submit'
                    variant='contained'
                >
                    <SendIcon sx={{marginRight:"7px" }}/>
                    ارسال
                </Button>
            </CardContent>
        </Card>
    )
}

export default AddComment

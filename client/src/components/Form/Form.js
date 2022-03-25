import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import useStyles from './styles.js';
import { createPost, updatePost } from "../../actions/posts.js";
    
const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        author: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const clear = () => {
        setCurrentId(0);
        setPostData({ author: '', title: '', message: '', tags: '', selectedFile: '' });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
          dispatch(createPost(postData));
          clear();
        } else {
          dispatch(updatePost(currentId, postData));
          clear();
        }
      };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Uređivanje posta' : 'Kreiranje posta' }</Typography>
                <TextField 
                    name="author"
                    variant="outlined" 
                    label="Autor"
                    fullWidth
                    value={postData.author}
                    onChange={(e) => setPostData({ ...postData, author: e.target.value })}
                />
                <TextField 
                    name="title"
                    variant="outlined" 
                    label="Naslov"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField 
                    name="message"
                    variant="outlined" 
                    label="Tekst"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField 
                    name="tags"
                    variant="outlined" 
                    label="Tagovi"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="File"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                        Potvrdi
                    </Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                        Očisti
                    </Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;
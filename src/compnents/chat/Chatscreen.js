import { Dialog } from '@mui/material'
import React from 'react'

function Chatscreen() {

  const dialog = {
    height: '90%',
    width: '90%',
    marginTop: '5%',
    marginBottom: '5%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overFlow: 'hidden',
  };

  return (
    <Dialog open={true} PaperProps={{sx: dialog}}>
      This is chat screen Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusamus deserunt quaerat asperiores! Maiores soluta consequuntur corrupti dicta error! Ea facilis vitae dolore commodi maxime veritatis voluptatem accusantium minus, architecto illum assumenda vel necessitatibus doloremque suscipit ducimus quas provident officia aspernatur quod impedit ex quaerat molestias! Aspernatur omnis magni perferendis asperiores molestias molestiae. Quam ducimus numquam quidem ea odit alias expedita iste, debitis, qui laboriosam reiciendis minima autem officiis totam voluptatibus deserunt amet blanditiis consectetur earum, unde atque quas odio inventore nisi? Praesentium reprehenderit tempore ratione, facilis quasi repudiandae, deleniti veniam minima magni asperiores nobis, labore mollitia ab doloribus. Alias perspiciatis explicabo inventore doloribus fugiat nisi, magni voluptatibus commodi odit iste animi error nobis repellat at! Repudiandae illo atque in!
    </Dialog>
  )
}

export default Chatscreen

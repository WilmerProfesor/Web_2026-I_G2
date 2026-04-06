import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function BotonMui() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}


// import Button from '@mui/material/Button';

// const BotonMui = () => {
//   return (
//     <Button variant="contained" disableElevation>
//       Disable elevation
//     </Button>
//   );
// }

// export default BotonMui;

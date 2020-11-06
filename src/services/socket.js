import io from 'socket.io-client';

const socket = io('http://localhost:3000', { forceNew: false });

export default socket;

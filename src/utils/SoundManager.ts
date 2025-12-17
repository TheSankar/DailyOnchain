import checkinSound from '../assets/sounds/checkin.mp3';

export const playCheckinSound = () => {
    try {
        const audio = new Audio(checkinSound);
        audio.play().catch(e => console.error("Audio play failed:", e));
    } catch (e) {
        console.error("Audio initialization failed:", e);
    }
};

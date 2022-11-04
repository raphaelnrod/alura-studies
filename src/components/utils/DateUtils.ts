export function timeToSeconds(time: string) {
    const [hour = '0', min = '0', sec = '0'] = time.split(":");

    const hourInSeconds = Number(hour) * 3600;
    const minInSeconds = Number(min) * 60;
    return hourInSeconds + minInSeconds + Number(sec);
}
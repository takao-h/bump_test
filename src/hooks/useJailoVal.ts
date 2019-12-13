import { useState, useEffect } from "react";
import { Gyroscope } from "motion-sensors-polyfill"
// const deviceOrientationEvent:any = new DeviceOrientationEvent()
let gyroscope = new Gyroscope({ frequency: 15 });
function useJailoVal() {
  let [alpha, setAlpha] = useState(window.DeviceOrientationEvent)
  let [beta, setBeta] = useState(window.DeviceOrientationEvent)
  let [gamma, setGamma] = useState(window.DeviceOrientationEvent)

  useEffect(() => {
    const handler = () => {
      setAlpha(window.DeviceOrientationEvent)
      setBeta(window.DeviceOrientationEvent)
      setGamma(window.DeviceOrientationEvent)
    }
    window.addEventListener('orientationEvent', handler)
    return () => window.addEventListener('orientationEvent', handler)
  }, [])
  return [alpha, beta, gamma]
}

export default useJailoVal
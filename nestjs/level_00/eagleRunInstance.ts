/*
 10. Buatlah instance dari class EagleRun bernama "speedTes" dengan ketentuan:
 - properti name bernilai: "Labi"
 - properti speed bernilai: 220

 const speedTes = new EagleRun("Kuku", 220)
 speedTes.runEagle() // Kuku Berlari dengan kecapatan 220 km";
 */

import { EagleRun } from "./eagleRun";

 const speedTes = new EagleRun("Labi", 220);
 console.log(speedTes.runEagle());
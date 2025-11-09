import { WorkoutListSequenceType } from "@/app";

export default class AppService {
    base: string = 'https://light-vision.ucoz.ru/mybody'

    _sleep(seconds: number) {
      return new Promise(resolve => setTimeout(resolve, seconds * 1000))
    }

    _greeting() {
        console.log(`Make some noise baby`)
    }

    async getWorkoutListSequences(): Promise<WorkoutListSequenceType> {
        const response = await fetch(`${this.base}/workouts/workout-list-data.json`, {
            cache: 'reload',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            }
          });
          
          if (!response.ok) {
            return {
                complex: [],
                hiit: [],
                smoothFitness: [] 
            }
          }
          
          const result: WorkoutListSequenceType = (await response.json()) as WorkoutListSequenceType;
      
          return result
    }
}
import { WorkoutListSequenceType } from "@/app";
import { WorkoutListItemType } from "@/components/WorkoutListItem";
import { ImageURISource } from "react-native";

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

    getWorkoutPreviewByID(workoutID: number): ImageURISource {
        return {
            uri: `${this.base}/workouts/${workoutID}/preview.png`
        }
    }

    async getWorkoutListItemDataByID(workoutID: number): Promise<WorkoutListItemType> {
        const response = await fetch(`${this.base}/workouts/${workoutID}/workout-list-item-data.json`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            }
          });
          
          const result: WorkoutListItemType = (await response.json()) as WorkoutListItemType;
          
          return result
    }
}
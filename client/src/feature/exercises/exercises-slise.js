import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const exercisesSlice = createSlice({
  name: '@@exercises',
  initialState: {
    date: '',
    events: [
      { id: uuidv4(), title: 'Событие 1', start: '2024-04-23T10:00:00' },
    ],
    exercises: [
      {
        id: uuidv4(), title: 'Жим лежа', description: 'Info from Жим лежа', urlVideo: 'https://www.youtube.com/embed/uioH7LSL7Js?si=8VoBAWq8xAxUGN3q',
        category: ['breast', 'triceps', 'shoulders']
      },
      {
        id: uuidv4(), title: 'Жим ногами', description: 'Info from Жим лежа', urlVideo: 'https://www.youtube.com/embed/uioH7LSL7Js?si=8VoBAWq8xAxUGN3q',
        category: ['leg']
      },
      {
        id: uuidv4(), title: 'Разгибание ног', description: 'Info from Жим лежа', urlVideo: 'https://www.youtube.com/embed/uioH7LSL7Js?si=8VoBAWq8xAxUGN3q',
        category: ['leg']
      },
      {
        id: uuidv4(), title: 'Тяга вертикального блока к поясу', description: 'Info from Жим лежа', urlVideo: 'https://www.youtube.com/embed/uioH7LSL7Js?si=8VoBAWq8xAxUGN3q',
        category: ['back', 'triceps']
      },
      {
        id: uuidv4(), title: 'Тяга вертикального блока к низу', description: 'Info from Жим лежа', urlVideo: 'https://www.youtube.com/embed/uioH7LSL7Js?si=8VoBAWq8xAxUGN3q',
        category: ['triceps']
      },
      {
        id: uuidv4(), title: 'Становая тяга', description: 'Info from Становая тяга', urlVideo: 'https://www.youtube.com/embed/duSnLRneftc?si=4sv-8axbiLa5fBgK',
        category: ['leg', 'back', 'ass']
      },
      {
        id: uuidv4(), title: 'Приседание со штангой', description: 'Info from Приседание со штангой',
        category: ['leg', 'ass', 'back']
      },
      {
        id: uuidv4(), title: 'Разведение гантель в стороны', description: 'Info from Приседание со штангой',
        category: ['shoulders']
      },
      {
        id: uuidv4(), title: 'Тяга верхнего блока', description: 'Info from Приседание со штангой',
        category: ['back', 'shoulders']
      },
      {
        id: uuidv4(), title: 'Жим Арнольда', description: 'Info from Приседание со штангой',
        category: ['breast', 'shoulders', 'back', 'triceps']
      },
    ],
    exerciseInfo: { id: uuidv4(), title: 'Упражнение', description: 'Кликни по упражнению, чтобы посмотреть информацию о нем' },
    // инфа о каждом упражнении
    modalAdd: false,
    modalToggle: false,
    approachesId: '',
    categoryExercise: 'leg',
  },
  reducers: {
    setTime: (state, action) => {
      state.date = action.payload;
    },
    addEvents: (state, action) => {
      const event = { ...action.payload.exercise, id: uuidv4(), start: action.payload.time }
      // console.log(event)
      state.events = [...state.events, event]
    },
    ToggleEvent: (state, action) => {
      // console.log('Action.payload', action.payload)
      const updatedEvents = state.events.map(event => {
        if (event.id === action.payload.event.id) {
          console.log('нашел')
          return {
            ...event,
            approaches: event.approaches ? [...event.approaches, { ...action.payload.valuesInput, id: uuidv4() }] : [{ ...action.payload.valuesInput, id: uuidv4() }],
            // approaches: action.payload.valuesInput,
          };
        }
        return event;
      });

      return { ...state, events: updatedEvents };
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload)
    },
    ToggleApproaches: (state, action) => {
      // console.log('Action.payload', action.payload)
      const updatedEvents = state.events.map(event => {
        if (event.id === action.payload.event.id) {
          // console.log('нашел approachesId', action.payload.approachesId)
          return {
            ...event,
            approaches: event.approaches.map(app => {
              if (app.id === action.payload.approachesId) {
                return {
                  ...app,
                  ...action.payload.valuesInput,
                }
              }
              return app
            })
          };
        }
        return event;
      });

      return { ...state, events: updatedEvents };
    },
    upDateEventDate: (state, action) => {
      const { eventId, newStartDate } = action.payload;
      console.log("Slice:", eventId, newStartDate.slice(0, 19))
      // Находим событие по его ID
      const eventToUpdate = state.events.find(event => event.id === eventId);
      if (eventToUpdate) {
        // Обновляем дату начала события
        eventToUpdate.start = newStartDate;
      }
    },
    addExerciseInfo: (state, action) => {
      state.exerciseInfo = action.payload
    },
    toglleModalAdd: (state, action) => {
      state.modalAdd = !state.modalAdd
    },
    toglleModalToggle: (state, action) => {
      state.modalToggle = !state.modalToggle
      state.approachesId = action.payload
    },
    toggleCategory: (state, action) => {
      state.categoryExercise = action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(resetToDefault, () => {
  //       return []
  //     })
  // }
})

export const { setTime, addEvents, ToggleEvent, ToggleApproaches,
  toglleModalAdd, toglleModalToggle, addExerciseInfo, removeEvent,
  upDateEventDate, toggleCategory } = exercisesSlice.actions
export const exercisesReducer = exercisesSlice.reducer

export const selectVisibleExercises = (state, filter, value) => {
  switch (filter) {
    case 'all': {
      return state.exercises.filter(exercise => {
        const title = exercise.title.toLowerCase();
        const search = value.toLowerCase();

        return title.includes(search);
      })
    }
    case 'breast': {
      return state.exercises.filter(item => item.category.some(el => el.includes(filter))).filter(exercise => {
        const title = exercise.title.toLowerCase();
        const search = value.toLowerCase();

        return title.includes(search);
      })
    }
    case 'back': {
      return state.exercises.filter(item => item.category.some(el => el.includes(filter))).filter(exercise => {
        const title = exercise.title.toLowerCase();
        const search = value.toLowerCase();

        return title.includes(search);
      })
    }
    case 'leg': {
      return state.exercises.filter(item => item.category.some(el => el.includes(filter))).filter(exercise => {
        const title = exercise.title.toLowerCase();
        const search = value.toLowerCase();

        return title.includes(search);
      })
    }
    case 'triceps': {
      return state.exercises.filter(item => item.category.some(el => el.includes(filter))).filter(exercise => {
        const title = exercise.title.toLowerCase();
        const search = value.toLowerCase();

        return title.includes(search);
      })
    }
    case 'shoulders': {
      return state.exercises.filter(item => item.category.some(el => el.includes(filter))).filter(exercise => {
        const title = exercise.title.toLowerCase();
        const search = value.toLowerCase();

        return title.includes(search);
      })
    }
    case 'ass': {
      return state.exercises.filter(item => item.category.some(el => el.includes(filter))).filter(exercise => {
        const title = exercise.title.toLowerCase();
        const search = value.toLowerCase();

        return title.includes(search);
      })
    }
    default: { return state.todos }
  }
}
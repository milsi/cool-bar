# cool bar.

A weight-lifting tracker built on vite+vue.

Since I myself lift weights, wanted an application that would help to track what I need to do in the gym, be able to modify it during the workout and later see my progress.

## Features

- Create user profile
- Add new workouts per day and movement
- Modify workout or delete it

## Future

- Stats
- Automatic workout suggestions
- Gym weights profile
- Workout csv import/export
- Body measurement tracking

## Local storage

```
{"userProfile":{"name":"Jane Doe","age":82,"sex":"F","bodyWeight":74},"workouts":{
  "2024-04-29":{
    "Barbell Squat": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Overhead Press": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Deadlift": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    }
  },"2024-04-28":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-27":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Overhead Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-26":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-25":{
    "Barbell Squat": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Overhead Press": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Deadlift": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    }
  },"2024-04-24":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-23":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Overhead Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-22":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-21":{
    "Barbell Squat": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Overhead Press": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Deadlift": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    }
  },"2024-04-20":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-19":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Overhead Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-18":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-17":{
    "Barbell Squat": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Overhead Press": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    },
    "Deadlift": {
      "Warmup": [
        { "set": 1, "reps": 5, "weight": 20 },
        { "set": 2, "reps": 5, "weight": 20 },
        { "set": 3, "reps": 5, "weight": 20 }
      ],
      "Working": [
        { "set": 4, "reps": 5, "weight": 30 },
        { "set": 5, "reps": 5, "weight": 30 },
        { "set": 6, "reps": 5, "weight": 30 }
      ]
    }
  },"2024-04-16":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-15":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Overhead Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
},"2024-04-14":{
  "Barbell Squat": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Bench Press": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  },
  "Deadlift": {
    "Warmup": [
      { "set": 1, "reps": 5, "weight": 20 },
      { "set": 2, "reps": 5, "weight": 20 },
      { "set": 3, "reps": 5, "weight": 20 }
    ],
    "Working": [
      { "set": 4, "reps": 5, "weight": 30 },
      { "set": 5, "reps": 5, "weight": 30 },
      { "set": 6, "reps": 5, "weight": 30 }
    ]
  }
}}}
```

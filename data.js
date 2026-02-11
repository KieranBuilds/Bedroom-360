var APP_DATA = {
  "scenes": [
    {
      "id": "0-center-",
      "name": "Center ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5039218545813178,
          "pitch": -0.05625825447465793,
          "rotation": 12.566370614359176,
          "target": "1-room-left-side"
        },
        {
          "yaw": 0.5269014559986722,
          "pitch": 0.004075848939367077,
          "rotation": 6.283185307179586,
          "target": "2-room-right-side"
        },
        {
          "yaw": -1.6388056972920175,
          "pitch": -0.012572791336410205,
          "rotation": 0,
          "target": "3-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-room-left-side",
      "name": "Room Left side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.5093511898678926,
        "pitch": 0.0025030207050473763,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.08560614170527181,
          "pitch": 0.00864819658389493,
          "rotation": 6.283185307179586,
          "target": "0-center-"
        },
        {
          "yaw": -1.200919241501543,
          "pitch": 0.028083787515612357,
          "rotation": 6.283185307179586,
          "target": "2-room-right-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room-right-side",
      "name": "Room Right side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.1198602825331285,
          "pitch": -0.04200610558865847,
          "rotation": 31.415926535897956,
          "target": "0-center-"
        },
        {
          "yaw": 0.010200001447582707,
          "pitch": 0.01062132701027707,
          "rotation": 25.132741228718363,
          "target": "1-room-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.26179938779926815,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.4763872630537609,
          "pitch": 0.22720343054187353,
          "rotation": 31.415926535897956,
          "target": "0-center-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bedroom Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

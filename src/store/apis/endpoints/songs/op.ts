const RECENT_SONGS = [
  {
    song: {
      id: "song_a1b2c3d4",
      name: "Flowers",
      genre: ["Pop", "Disco"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Miley_Cyrus_-_Flowers.png/220px-Miley_Cyrus_-_Flowers.png",
    },
    artist: {
      id: "artist_e5f6g7h8",
      name: "Miley Cyrus",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Miley_Cyrus_July_2023_by_Brian_Bowen_Smith.jpg/330px-Miley_Cyrus_July_2023_by_Brian_Bowen_Smith.jpg",
    },
    user: {
      id: "user_i9j0k1l2",
      name: "Ava Rodriguez",
      profilePic: "https://example.com/images/ava_rodriguez.jpg",
    },
    streamedDate: "2024-03-15T10:30:00Z",
    streamCount: 78,
  },
  {
    song: {
      id: "song_b2c3d4e5",
      name: "Kill Bill",
      genre: ["R&B", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/SZA_-_Kill_Bill.png/220px-SZA_-_Kill_Bill.png",
    },
    artist: {
      id: "artist_f6g7h8i9",
      name: "SZA",
      genre: ["R&B", "Soul"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SZA_at_the_Governors_Ball_Music_Festival_in_2023.jpg/330px-SZA_at_the_Governors_Ball_Music_Festival_in_2023.jpg",
    },
    user: {
      id: "user_j0k1l2m3",
      name: "Ethan Carter",
      profilePic: "https://example.com/images/ethan_carter.jpg",
    },
    streamedDate: "2024-03-14T16:45:00Z",
    streamCount: 92,
  },
  {
    song: {
      id: "song_c3d4e5f6",
      name: "As It Was",
      genre: ["Pop", "Synth-pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Harry_Styles_-_As_It_Was.png/220px-Harry_Styles_-_As_It_Was.png",
    },
    artist: {
      id: "artist_g7h8i9j0",
      name: "Harry Styles",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Harry_Styles_at_Love_On_Tour_in_Chicago_2022_%283%29.jpg/330px-Harry_Styles_at_Love_On_Tour_in_Chicago_2022_%283%29.jpg",
    },
    user: {
      id: "user_k1l2m3n4",
      name: "Isabella Nguyen",
      profilePic: "https://example.com/images/isabella_nguyen.jpg",
    },
    streamedDate: "2024-03-13T22:10:00Z",
    streamCount: 120,
  },
  {
    song: {
      id: "song_d4e5f6g7",
      name: "Calm Down (Remix)",
      genre: ["Afrobeats", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Calm_Down_Remix_by_Rema_and_Selena_Gomez.jpeg/220px-Calm_Down_Remix_by_Rema_and_Selena_Gomez.jpeg",
    },
    artist: {
      id: "artist_h8i9j0k1",
      name: "Rema & Selena Gomez",
      genre: ["Afrobeats", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb47b94c9184af894854442993",
    },
    user: {
      id: "user_l2m3n4o5",
      name: "Jackson Davis",
      profilePic: "https://example.com/images/jackson_davis.jpg",
    },
    streamedDate: "2024-03-12T09:20:00Z",
    streamCount: 68,
  },
  {
    song: {
      id: "song_e5f6g7h8",
      name: "Unholy",
      genre: ["Pop", "Dark Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Sam_Smith_and_Kim_Petras_-_Unholy.png/220px-Sam_Smith_and_Kim_Petras_-_Unholy.png",
    },
    artist: {
      id: "artist_i9j0k1l2",
      name: "Sam Smith & Kim Petras",
      genre: ["Pop", "Vocal Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5ebff4c797f7c14355580382648",
    },
    user: {
      id: "user_m3n4o5p6",
      name: "Sophia Wilson",
      profilePic: "https://example.com/images/sophia_wilson.jpg",
    },
    streamedDate: "2024-03-11T18:05:00Z",
    streamCount: 85,
  },
  {
    song: {
      id: "song_f6g7h8i9",
      name: "Die For You (Remix)",
      genre: ["R&B", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/The_Weeknd_and_Ariana_Grande_Die_For_You_Remix.jpg/220px-The_Weeknd_and_Ariana_Grande_Die_For_You_Remix.jpg",
    },
    artist: {
      id: "artist_j0k1l2m3",
      name: "The Weeknd & Ariana Grande",
      genre: ["R&B", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb489c7554426841df220f3762",
    },
    user: {
      id: "user_n4o5p6q7",
      name: "Liam Garcia",
      profilePic: "https://example.com/images/liam_garcia.jpg",
    },
    streamedDate: "2024-03-10T14:55:00Z",
    streamCount: 110,
  },
  {
    song: {
      id: "song_g7h8i9j0",
      name: "Creepin'",
      genre: ["Hip-Hop", "R&B"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Metro_Boomin%2C_The_Weeknd_and_21_Savage_-_Creepin%27.png/220px-Metro_Boomin%2C_The_Weeknd_and_21_Savage_-_Creepin%27.png",
    },
    artist: {
      id: "artist_k1l2m3n4",
      name: "Metro Boomin, The Weeknd & 21 Savage",
      genre: ["Hip-Hop", "Trap"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb4e893c4684ff03a4d4a1a855",
    },
    user: {
      id: "user_o5p6q7r8",
      name: "Mia Rodriguez",
      profilePic: "https://example.com/images/mia_rodriguez.jpg",
    },
    streamedDate: "2024-03-09T21:30:00Z",
    streamCount: 72,
  },
  {
    song: {
      id: "song_h8i9j0k1",
      name: "Last Night",
      genre: ["Country", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Morgan_Wallen_-_Last_Night.png/220px-Morgan_Wallen_-_Last_Night.png",
    },
    artist: {
      id: "artist_l2m3n4o5",
      name: "Morgan Wallen",
      genre: ["Country", "Pop Country"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Morgan_Wallen_cropped.jpg/330px-Morgan_Wallen_cropped.jpg",
    },
    user: {
      id: "user_p6q7r8s9",
      name: "Noah Adams",
      profilePic: "https://example.com/images/noah_adams.jpg",
    },
    streamedDate: "2024-03-08T12:40:00Z",
    streamCount: 98,
  },
  {
    song: {
      id: "song_i9j0k1l2",
      name: "Anti-Hero",
      genre: ["Pop", "Folk-Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Taylor_Swift_-_Anti-Hero.png/220px-Taylor_Swift_-_Anti-Hero.png",
    },
    artist: {
      id: "artist_m3n4o5p6",
      name: "Taylor Swift",
      genre: ["Pop", "Country"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taylor_Swift_May_2023_%28cropped%29.jpg/330px-Taylor_Swift_May_2023_%28cropped%29.jpg",
    },
    user: {
      id: "user_q7r8s9t0",
      name: "Chloe Baker",
      profilePic: "https://example.com/images/chloe_baker.jpg",
    },
    streamedDate: "2024-03-07T19:15:00Z",
    streamCount: 135,
  },
  {
    song: {
      id: "song_j0k1l2m3",
      name: "Cuff It",
      genre: ["R&B", "Funk"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Beyonc%C3%A9_-_Cuff_It.png/220px-Beyonc%C3%A9_-_Cuff_It.png",
    },
    artist: {
      id: "artist_n4o5p6q7",
      name: "Beyoncé",
      genre: ["R&B", "Pop"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Beyonce_rocks_the_stage_at_Revel_Presents_Beyonce_Live_in_Atlantic_City_-_jetmag.com-7.jpg/330px-Beyonce_rocks_the_stage_at_Revel_Presents_Beyonce_Live_in_Atlantic_City_-_jetmag.com-7.jpg",
    },
    user: {
      id: "user_r8s9t0u1",
      name: "Daniel Perez",
      profilePic: "https://example.com/images/daniel_perez.jpg",
    },
    streamedDate: "2024-03-06T15:30:00Z",
    streamCount: 89,
  },
  {
    song: {
      id: "song_k1l2m3n4",
      name: "Boy's a liar Pt. 2",
      genre: ["Drill", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/PinkPantheress_and_Ice_Spice_-_Boy%27s_a_liar_Pt._2.png/220px-PinkPantheress_and_Ice_Spice_-_Boy%27s_a_liar_Pt._2.png",
    },
    artist: {
      id: "artist_o5p6q7r8",
      name: "PinkPantheress & Ice Spice",
      genre: ["Pop", "Drill"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb40a094499a971845a723843f",
    },
    user: {
      id: "user_s9t0u1v2",
      name: "Emily Green",
      profilePic: "https://example.com/images/emily_green.jpg",
    },
    streamedDate: "2024-03-05T11:00:00Z",
    streamCount: 75,
  },
  {
    song: {
      id: "song_l2m3n4o5",
      name: "Sure Thing",
      genre: ["R&B", "Soul"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Miguel_-_Sure_Thing_%28Official_Single_Cover%29.png/220px-Miguel_-_Sure_Thing_%28Official_Single_Cover%29.png",
    },
    artist: {
      id: "artist_p6q7r8s9",
      name: "Miguel",
      genre: ["R&B", "Funk"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Miguel_performing_in_Austin%2C_Texas_in_2013.jpg/330px-Miguel_performing_in_Austin%2C_Texas_in_2013.jpg",
    },
    user: {
      id: "user_t0u1v2w3",
      name: "Caleb Scott",
      profilePic: "https://example.com/images/caleb_scott.jpg",
    },
    streamedDate: "2024-03-04T17:45:00Z",
    streamCount: 60,
  },
  {
    song: {
      id: "song_m3n4o5p6",
      name: "Golden Hour",
      genre: ["Country", "Folk"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/JVKE_-_Golden_Hour.png/220px-JVKE_-_Golden_Hour.png",
    },
    artist: {
      id: "artist_q7r8s9t0",
      name: "JVKE",
      genre: ["Pop", "Electronic"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/JVKE_at_Wonderland_in_Concert_2022_by_Sydney_Gray.jpg/330px-JVKE_at_Wonderland_in_Concert_2022_by_Sydney_Gray.jpg",
    },
    user: {
      id: "user_u1v2w3x4",
      name: "Abigail Hall",
      profilePic: "https://example.com/images/abigail_hall.jpg",
    },
    streamedDate: "2024-03-03T08:30:00Z",
    streamCount: 55,
  },
  {
    song: {
      id: "song_n4o5p6q7",
      name: "Bloody Mary",
      genre: ["Pop", "Dance-Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Lady_Gaga_-_Bloody_Mary.png/220px-Lady_Gaga_-_Bloody_Mary.png",
    },
    artist: {
      id: "artist_r8s9t0u1",
      name: "Lady Gaga",
      genre: ["Pop", "Electronic"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lady_Gaga_Vogue_Japan_2019.jpg/330px-Lady_Gaga_Vogue_Japan_2019.jpg",
    },
    user: {
      id: "user_v2w3x4y5",
      name: "Matthew Wright",
      profilePic: "https://example.com/images/matthew_wright.jpg",
    },
    streamedDate: "2024-03-02T20:00:00Z",
    streamCount: 95,
  },
  {
    song: {
      id: "song_o5p6q7r8",
      name: "Lavender Haze",
      genre: ["Pop", "Synth-Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Taylor_Swift_-_Lavender_Haze.png/220px-Taylor_Swift_-_Lavender_Haze.png",
    },
    artist: {
      id: "artist_s9t0u1v2",
      name: "Taylor Swift",
      genre: ["Pop", "Synth-Pop"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taylor_Swift_May_2023_%28cropped%29.jpg/330px-Taylor_Swift_May_2023_%28cropped%29.jpg",
    },
    user: {
      id: "user_w3x4y5z6",
      name: "Ella Martin",
      profilePic: "https://example.com/images/ella_martin.jpg",
    },
    streamedDate: "2024-03-01T13:15:00Z",
    streamCount: 115,
  },
  {
    song: {
      id: "song_p6q7r8s9",
      name: "Under the Influence",
      genre: ["R&B", "Trap"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Chris_Brown_-_Under_the_Influence.jpg/220px-Chris_Brown_-_Under_the_Influence.jpg",
    },
    artist: {
      id: "artist_t0u1v2w3",
      name: "Chris Brown",
      genre: ["R&B", "Hip-Hop"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chris_Brown_in_2019.jpg/330px-Chris_Brown_in_2019.jpg",
    },
    user: {
      id: "user_x4y5z6a7",
      name: "Andrew White",
      profilePic: "https://example.com/images/andrew_white.jpg",
    },
    streamedDate: "2024-02-28T09:45:00Z",
    streamCount: 63,
  },
  {
    song: {
      id: "song_q7r8s9t0",
      name: "I'm Good (Blue)",
      genre: ["Dance-Pop", "House"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/David_Guetta_-_I%27m_Good_%28Blue%29. cover.jpg/220px-David_Guetta_-_I%27m_Good_%28Blue%29._cover.jpg",
    },
    artist: {
      id: "artist_u1v2w3x4",
      name: "David Guetta & Bebe Rexha",
      genre: ["EDM", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb534799d86c69592c48d1c986",
    },
    user: {
      id: "user_y5z6a7b8",
      name: "Samantha King",
      profilePic: "https://example.com/images/samantha_king.jpg",
    },
    streamedDate: "2024-02-27T16:20:00Z",
    streamCount: 81,
  },
  {
    song: {
      id: "song_r8s9t0u1",
      name: "Escapism.",
      genre: ["UK Garage", "R&B"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Raye_-_Escapism.png/220px-Raye_-_Escapism.png",
    },
    artist: {
      id: "artist_v2w3x4y5",
      name: "RAYE ft. 070 Shake",
      genre: ["R&B", "Alternative R&B"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb46a1408315461884a74d3432",
    },
    user: {
      id: "user_z6a7b8c9",
      name: "Kevin Turner",
      profilePic: "https://example.com/images/kevin_turner.jpg",
    },
    streamedDate: "2024-02-26T22:50:00Z",
    streamCount: 70,
  },
  {
    song: {
      id: "song_s9t0u1v2",
      name: "Rich Flex",
      genre: ["Hip Hop", "Trap"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Drake_and_21_Savage_-_Rich_Flex.jpg/220px-Drake_and_21_Savage_-_Rich_Flex.jpg",
    },
    artist: {
      id: "artist_w3x4y5z6",
      name: "Drake & 21 Savage",
      genre: ["Hip Hop", "Trap"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb4a9a9756c9d599f563f9a58a",
    },
    user: {
      id: "user_a7b8c9d0",
      name: "Olivia Martinez",
      profilePic: "https://example.com/images/olivia_martinez.jpg",
    },
    streamedDate: "2024-02-25T14:00:00Z",
    streamCount: 105,
  },
  {
    song: {
      id: "song_t0u1v2w3",
      name: "Players",
      genre: ["Hip Hop", "Pop Rap"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Coi_Leray_-_Players.Artwork.jpg/220px-Coi_Leray_-_Players.Artwork.jpg",
    },
    artist: {
      id: "artist_x4y5z6a7",
      name: "Coi Leray",
      genre: ["Hip Hop", "Pop"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Coi_Leray_in_2022.jpg/330px-Coi_Leray_in_2022.jpg",
    },
    user: {
      id: "user_b8c9d0e1",
      name: "Christopher Clark",
      profilePic: "https://example.com/images/christopher_clark.jpg",
    },
    streamedDate: "2024-02-24T10:10:00Z",
    streamCount: 66,
  },
];

const TOP_SONGS = [
  {
    song: {
      id: "song_top_1",
      name: "Flowers",
      genre: ["Pop", "Disco"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Miley_Cyrus_-_Flowers.png/220px-Miley_Cyrus_-_Flowers.png",
    },
    artist: {
      id: "artist_top_1",
      name: "Miley Cyrus",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Miley_Cyrus_July_2023_by_Brian_Bowen_Smith.jpg/330px-Miley_Cyrus_July_2023_by_Brian_Bowen_Smith.jpg",
    },
    user: {
      id: "user_top_1",
      name: "Ava Rodriguez",
      profilePic: "https://example.com/images/ava_rodriguez_top.jpg",
    },
    streamedDate: "2024-03-16T14:00:00Z",
    streamCount: 150,
  },
  {
    song: {
      id: "song_top_2",
      name: "Kill Bill",
      genre: ["R&B", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/SZA_-_Kill_Bill.png/220px-SZA_-_Kill_Bill.png",
    },
    artist: {
      id: "artist_top_2",
      name: "SZA",
      genre: ["R&B", "Soul"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SZA_at_the_Governors_Ball_Music_Festival_in_2023.jpg/330px-SZA_at_the_Governors_Ball_Music_Festival_in_2023.jpg",
    },
    user: {
      id: "user_top_2",
      name: "Ethan Carter",
      profilePic: "https://example.com/images/ethan_carter_top.jpg",
    },
    streamedDate: "2024-03-16T13:30:00Z",
    streamCount: 145,
  },
  {
    song: {
      id: "song_top_3",
      name: "Boy's a liar Pt. 2",
      genre: ["Drill", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/PinkPantheress_and_Ice_Spice_-_Boy%27s_a_liar_Pt._2.png/220px-PinkPantheress_and_Ice_Spice_-_Boy%27s_a_liar_Pt._2.png",
    },
    artist: {
      id: "artist_top_3",
      name: "PinkPantheress & Ice Spice",
      genre: ["Pop", "Drill"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb40a094499a971845a723843f",
    },
    user: {
      id: "user_top_3",
      name: "Isabella Nguyen",
      profilePic: "https://example.com/images/isabella_nguyen_top.jpg",
    },
    streamedDate: "2024-03-16T13:00:00Z",
    streamCount: 140,
  },
  {
    song: {
      id: "song_top_4",
      name: "Calm Down (Remix)",
      genre: ["Afrobeats", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Calm_Down_Remix_by_Rema_and_Selena_Gomez.jpeg/220px-Calm_Down_Remix_by_Rema_and_Selena_Gomez.jpeg",
    },
    artist: {
      id: "artist_top_4",
      name: "Rema & Selena Gomez",
      genre: ["Afrobeats", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb47b94c9184af894854442993",
    },
    user: {
      id: "user_top_4",
      name: "Jackson Davis",
      profilePic: "https://example.com/images/jackson_davis_top.jpg",
    },
    streamedDate: "2024-03-16T12:30:00Z",
    streamCount: 135,
  },
  {
    song: {
      id: "song_top_5",
      name: "Die For You (Remix)",
      genre: ["R&B", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/The_Weeknd_and_Ariana_Grande_Die_For_You_Remix.jpg/220px-The_Weeknd_and_Ariana_Grande_Die_For_You_Remix.jpg",
    },
    artist: {
      id: "artist_top_5",
      name: "The Weeknd & Ariana Grande",
      genre: ["R&B", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb489c7554426841df220f3762",
    },
    user: {
      id: "user_top_5",
      name: "Sophia Wilson",
      profilePic: "https://example.com/images/sophia_wilson_top.jpg",
    },
    streamedDate: "2024-03-16T12:00:00Z",
    streamCount: 130,
  },
  {
    song: {
      id: "song_top_6",
      name: "Last Night",
      genre: ["Country", "Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Morgan_Wallen_-_Last_Night.png/220px-Morgan_Wallen_-_Last_Night.png",
    },
    artist: {
      id: "artist_top_6",
      name: "Morgan Wallen",
      genre: ["Country", "Pop Country"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Morgan_Wallen_cropped.jpg/330px-Morgan_Wallen_cropped.jpg",
    },
    user: {
      id: "user_top_6",
      name: "Liam Garcia",
      profilePic: "https://example.com/images/liam_garcia_top.jpg",
    },
    streamedDate: "2024-03-16T11:30:00Z",
    streamCount: 125,
  },
  {
    song: {
      id: "song_top_7",
      name: "As It Was",
      genre: ["Pop", "Synth-pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Harry_Styles_-_As_It_Was.png/220px-Harry_Styles_-_As_It_Was.png",
    },
    artist: {
      id: "artist_top_7",
      name: "Harry Styles",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Harry_Styles_at_Love_On_Tour_in_Chicago_2022_%283%29.jpg/330px-Harry_Styles_at_Love_On_Tour_in_Chicago_2022_%283%29.jpg",
    },
    user: {
      id: "user_top_7",
      name: "Mia Rodriguez",
      profilePic: "https://example.com/images/mia_rodriguez_top.jpg",
    },
    streamedDate: "2024-03-16T11:00:00Z",
    streamCount: 120,
  },
  {
    song: {
      id: "song_top_8",
      name: "Creepin'",
      genre: ["Hip-Hop", "R&B"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Metro_Boomin%2C_The_Weeknd_and_21_Savage_-_Creepin%27.png/220px-Metro_Boomin%2C_The_Weeknd_and_21_Savage_-_Creepin%27.png",
    },
    artist: {
      id: "artist_top_8",
      name: "Metro Boomin, The Weeknd & 21 Savage",
      genre: ["Hip-Hop", "Trap"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb4e893c4684ff03a4d4a1a855",
    },
    user: {
      id: "user_top_8",
      name: "Noah Adams",
      profilePic: "https://example.com/images/noah_adams_top.jpg",
    },
    streamedDate: "2024-03-16T10:30:00Z",
    streamCount: 115,
  },
  {
    song: {
      id: "song_top_9",
      name: "Unholy",
      genre: ["Pop", "Dark Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Sam_Smith_and_Kim_Petras_-_Unholy.png/220px-Sam_Smith_and_Kim_Petras_-_Unholy.png",
    },
    artist: {
      id: "artist_top_9",
      name: "Sam Smith & Kim Petras",
      genre: ["Pop", "Vocal Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5ebff4c797f7c14355580382648",
    },
    user: {
      id: "user_top_9",
      name: "Chloe Baker",
      profilePic: "https://example.com/images/chloe_baker_top.jpg",
    },
    streamedDate: "2024-03-16T10:00:00Z",
    streamCount: 110,
  },
  {
    song: {
      id: "song_top_10",
      name: "Anti-Hero",
      genre: ["Pop", "Folk-Pop"],
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Taylor_Swift_-_Anti-Hero.png/220px-Taylor_Swift_-_Anti-Hero.png",
    },
    artist: {
      id: "artist_top_10",
      name: "Taylor Swift",
      genre: ["Pop", "Country"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taylor_Swift_May_2023_%28cropped%29.jpg/330px-Taylor_Swift_May_2023_%28cropped%29.jpg",
    },
    user: {
      id: "user_top_10",
      name: "Daniel Perez",
      profilePic: "https://example.com/images/daniel_perez_top.jpg",
    },
    streamedDate: "2024-03-16T09:30:00Z",
    streamCount: 105,
  },
];

export const SONGS_RECENT_OUTPUT = RECENT_SONGS;

export const SONGS_HITS_OUTPUT = TOP_SONGS;

import { IPeriod } from "../metrics/type";
import { ISongInfo, ITopArtist } from "./type";

const RECENT_SONGS: ISongInfo[] = [
  {
    lastStreamedOn: "2024-03-15T10:30:00Z",
    streamCount: 78,
    revenueSource: "subscriptions",
    song: {
      id: "song_6a7b8c9d0e1f",
      name: "Flowers",
      genre: ["Pop", "Disco"],
      pic: "https://i1.sndcdn.com/artworks-YOSTbh90ESawTlzu-s9fROg-t500x500.jpg",
    },
    artist: {
      id: "artist_2e1f9a8b7c6d",
      name: "Miley Cyrus",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0z3D6nt3fKB9IhNp-uM4Ia7dZBWRa1b8Xw&s",
    },
    user: {
      id: "user_f1e2d3c4b9a8",
      name: "Ava Rodriguez",
      profilePic: "https://example.com/images/ava_rodriguez.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-14T16:45:00Z",
    streamCount: 92,
    revenueSource: "subscriptions",
    song: {
      id: "song_e5f6a1b2c3d4",
      name: "Kill Bill",
      genre: ["R&B", "Pop"],
      pic: "https://static.wixstatic.com/media/d19474_ba8c85461372468fb2a38c5e87bc88d4~mv2.png/v1/fill/w_568,h_694,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d19474_ba8c85461372468fb2a38c5e87bc88d4~mv2.png",
    },
    artist: {
      id: "artist_c3d4e5f6a1b2",
      name: "SZA",
      genre: ["R&B", "Soul"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SZA_at_the_Governors_Ball_Music_Festival_in_2023.jpg/330px-SZA_at_the_Governors_Ball_Music_Festival_in_2023.jpg",
    },
    user: {
      id: "user_b2a1f6e5d4c3",
      name: "Ethan Carter",
      profilePic: "https://example.com/images/ethan_carter.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-13T22:10:00Z",
    streamCount: 120,
    revenueSource: "ads",
    song: {
      id: "song_a1b2c3d4e5f6",
      name: "As It Was",
      genre: ["Pop", "Synth-pop"],
      pic: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
    },
    artist: {
      id: "artist_f6e5d4c3b2a1",
      name: "Harry Styles",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Harry_Styles_at_Love_On_Tour_in_Chicago_2022_%283%29.jpg/330px-Harry_Styles_at_Love_On_Tour_in_Chicago_2022_%283%29.jpg",
    },
    user: {
      id: "user_d4c3b2a1f6e5",
      name: "Isabella Nguyen",
      profilePic: "https://example.com/images/isabella_nguyen.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-12T09:20:00Z",
    streamCount: 68,
    revenueSource: "subscriptions",
    song: {
      id: "song_c3d4e5f6a1b2",
      name: "Calm Down (Remix)",
      genre: ["Afrobeats", "Pop"],
      pic: "https://i1.sndcdn.com/artworks-bZoe0y2USPuXyf3Y-7MGOhg-t500x500.jpg",
    },
    artist: {
      id: "artist_b2a1f6e5d4c3",
      name: "Rema & Selena Gomez",
      genre: ["Afrobeats", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb47b94c9184af894854442993",
    },
    user: {
      id: "user_e5f6a1b2c3d4",
      name: "Jackson Davis",
      profilePic: "https://example.com/images/jackson_davis.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-11T18:05:00Z",
    streamCount: 85,
    revenueSource: "ads",
    song: {
      id: "song_f6a1b2c3d4e5",
      name: "Unholy",
      genre: ["Pop", "Dark Pop"],
      pic: "https://c.saavncdn.com/725/Unholy-English-2022-20220922233621-500x500.jpg",
    },
    artist: {
      id: "artist_d4c3b2a1f6e5",
      name: "Sam Smith & Kim Petras",
      genre: ["Pop", "Vocal Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5ebff4c797f7c14355580382648",
    },
    user: {
      id: "user_a1b2c3d4e5f6",
      name: "Sophia Wilson",
      profilePic: "https://example.com/images/sophia_wilson.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-10T14:55:00Z",
    streamCount: 110,
    revenueSource: "subscriptions",
    song: {
      id: "song_b2c3d4e5f6a1",
      name: "Die For You (Remix)",
      genre: ["R&B", "Pop"],
      pic: "https://i.pinimg.com/736x/5d/e1/1b/5de11b50a336224f47229eb0daa016e4.jpg",
    },
    artist: {
      id: "artist_a1f6e5d4c3b2",
      name: "The Weeknd & Ariana Grande",
      genre: ["R&B", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb489c7554426841df220f3762",
    },
    user: {
      id: "user_f6e5d4c3b2a1",
      name: "Liam Garcia",
      profilePic: "https://example.com/images/liam_garcia.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-09T21:30:00Z",
    streamCount: 72,
    revenueSource: "ads",
    song: {
      id: "song_d4e5f6a1b2c3",
      name: "Creepin'",
      genre: ["Hip-Hop", "R&B"],
      pic: "https://images.genius.com/39ed2f969ac708000277af69349818c4.1000x872x1.jpg",
    },
    artist: {
      id: "artist_e5d4c3b2a1f6",
      name: "Metro Boomin, The Weeknd & 21 Savage",
      genre: ["Hip-Hop", "Trap"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb4e893c4684ff03a4d4a1a855",
    },
    user: {
      id: "user_c3b2a1f6e5d4",
      name: "Mia Rodriguez",
      profilePic: "https://example.com/images/mia_rodriguez.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-08T12:40:00Z",
    streamCount: 98,
    revenueSource: "subscriptions",
    song: {
      id: "song_h8i9j0k1l2m3",
      name: "Last Night",
      genre: ["Country", "Pop"],
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oTu1FWAGWc7m9JKhpeHnfZJTojaXhnhIUQ&s",
    },
    artist: {
      id: "artist_a1b2c3d4e5f6",
      name: "Morgan Wallen",
      genre: ["Country", "Pop Country"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Morgan_Wallen_cropped.jpg/330px-Morgan_Wallen_cropped.jpg",
    },
    user: {
      id: "user_e5f6a1b2c3d4",
      name: "Noah Adams",
      profilePic: "https://example.com/images/noah_adams.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-07T19:15:00Z",
    streamCount: 135,
    revenueSource: "ads",
    song: {
      id: "song_i9j0k1l2m3n4",
      name: "Anti-Hero",
      genre: ["Pop", "Folk-Pop"],
      pic: "https://images.genius.com/1d7e96eea4ff84d3a0f67ad2920dddd6.1000x1000x1.jpg",
    },
    artist: {
      id: "artist_c3d4e5f6a1b2",
      name: "Taylor Swift",
      genre: ["Pop", "Country"],
      profilePic:
        "https://i.pinimg.com/1200x/fe/d7/9a/fed79a5e7fcb0aceb8d17059e7bd5f4c.jpg",
    },
    user: {
      id: "user_a1b2c3d4e5f6",
      name: "Chloe Baker",
      profilePic: "https://example.com/images/chloe_baker.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-06T15:30:00Z",
    streamCount: 89,
    revenueSource: "subscriptions",
    song: {
      id: "song_j0k1l2m3n4o5",
      name: "Cuff It",
      genre: ["R&B", "Funk"],
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwvCdnOL7qg13meKtH7JZLt8GI4rBXNZ4rQ&s",
    },
    artist: {
      id: "artist_e5f6a1b2c3d4",
      name: "Beyoncé",
      genre: ["R&B", "Pop"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Beyonce_rocks_the_stage_at_Revel_Presents_Beyonce_Live_in_Atlantic_City_-_jetmag.com-7.jpg/330px-Beyonce_rocks_the_stage_at_Revel_Presents_Beyonce_Live_in_Atlantic_City_-_jetmag.com-7.jpg",
    },
    user: {
      id: "user_f6a1b2c3d4e5",
      name: "Daniel Perez",
      profilePic: "https://example.com/images/daniel_perez.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-05T11:00:00Z",
    streamCount: 75,
    revenueSource: "ads",
    song: {
      id: "song_k1l2m3n4o5p6",
      name: "Boy's a liar Pt. 2",
      genre: ["Drill", "Pop"],
      pic: "https://i1.sndcdn.com/artworks-YxoDyAlg4DABlWMW-30Xl8Q-t500x500.jpg",
    },
    artist: {
      id: "artist_f6e5d4c3b2a1",
      name: "PinkPantheress & Ice Spice",
      genre: ["Pop", "Drill"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb40a094499a971845a723843f",
    },
    user: {
      id: "user_d4c3b2a1f6e5",
      name: "Emily Green",
      profilePic: "https://example.com/images/emily_green.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-04T17:45:00Z",
    streamCount: 60,
    revenueSource: "subscriptions",
    song: {
      id: "song_l2m3n4o5p6q7",
      name: "Sure Thing",
      genre: ["R&B", "Soul"],
      pic: "https://i.scdn.co/image/ab67616d0000b273d5a8395b0d80b8c48a5d851c",
    },
    artist: {
      id: "artist_b2a1f6e5d4c3",
      name: "Miguel",
      genre: ["R&B", "Funk"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Miguel_performing_in_Austin%2C_Texas_in_2013.jpg/330px-Miguel_performing_in_Austin_Texas_in_2013.jpg",
    },
    user: {
      id: "user_c3d4e5f6a1b2",
      name: "Caleb Scott",
      profilePic: "https://example.com/images/caleb_scott.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-03T08:30:00Z",
    streamCount: 55,
    revenueSource: "ads",
    song: {
      id: "song_m3n4o5p6q7r8",
      name: "Golden Hour",
      genre: ["Country", "Folk"],
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1seWz5UfypzGoXDHuH5X3EegZiPancIC8g&s",
    },
    artist: {
      id: "artist_f5e1d2c3b4a9",
      name: "JVKE",
      genre: ["Pop", "Electronic"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/JVKE_at_Wonderland_in_Concert_2022_by_Sydney_Gray.jpg/330px-JVKE_at_Wonderland_in_Concert_2022_by_Sydney_Gray.jpg",
    },
    user: {
      id: "user_9a8b7c6d5e1f",
      name: "Abigail Hall",
      profilePic: "https://example.com/images/abigail_hall.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-02T20:00:00Z",
    streamCount: 95,
    revenueSource: "subscriptions",
    song: {
      id: "song_n4o5p6q7r8s9",
      name: "Bloody Mary",
      genre: ["Pop", "Dance-Pop"],
      pic: "https://i.scdn.co/image/ab67616d0000b273a47c0e156ea3cebe37fdcab8",
    },
    artist: {
      id: "artist_e1f9a8b7c6d5",
      name: "Lady Gaga",
      genre: ["Pop", "Electronic"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lady_Gaga_Vogue_Japan_2019.jpg/330px-Lady_Gaga_Vogue_Japan_2019.jpg",
    },
    user: {
      id: "user_7c6d5e1f9a8b",
      name: "Matthew Wright",
      profilePic: "https://example.com/images/matthew_wright.jpg",
    },
  },
  {
    lastStreamedOn: "2024-03-01T13:15:00Z",
    streamCount: 115,
    revenueSource: "ads",
    song: {
      id: "song_o5p6q7r8s9t0",
      name: "Lavender Haze",
      genre: ["Pop", "Synth-Pop"],
      pic: "https://images.genius.com/3afc08b9401e36cfc13fb8c2ef222b5c.1000x1000x1.jpg",
    },
    artist: {
      id: "artist_9a8b7c6d5e1f",
      name: "Taylor Swift",
      genre: ["Pop", "Synth-Pop"],
      profilePic:
        "https://i.pinimg.com/1200x/fe/d7/9a/fed79a5e7fcb0aceb8d17059e7bd5f4c.jpg",
    },
    user: {
      id: "user_d5e1f9a8b7c6",
      name: "Ella Martin",
      profilePic: "https://example.com/images/ella_martin.jpg",
    },
  },
  {
    lastStreamedOn: "2024-02-28T09:45:00Z",
    streamCount: 63,
    revenueSource: "subscriptions",
    song: {
      id: "song_p6q7r8s9t0u1",
      name: "Under the Influence",
      genre: ["R&B", "Trap"],
      pic: "https://cdn-images.dzcdn.net/images/cover/2487714abac4e2c7be5e70e9b06ced1f/1900x1900-000000-80-0-0.jpg",
    },
    artist: {
      id: "artist_7c6d5e1f9a8b",
      name: "Chris Brown",
      genre: ["R&B", "Hip-Hop"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chris_Brown_in_2019.jpg/330px-Chris_Brown_in_2019.jpg",
    },
    user: {
      id: "user_b7c6d5e1f9a8",
      name: "Andrew White",
      profilePic: "https://example.com/images/andrew_white.jpg",
    },
  },
  {
    lastStreamedOn: "2024-02-27T16:20:00Z",
    streamCount: 81,
    revenueSource: "ads",
    song: {
      id: "song_q7r8s9t0u1v2",
      name: "I'm Good (Blue)",
      genre: ["Dance-Pop", "House"],
      pic: "https://m.media-amazon.com/images/M/MV5BMmVhYWI4NGQtOTk3Ny00OTg3LWJhOGItNTg5ZWU0NzI2ZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    artist: {
      id: "artist_d5e1f9a8b7c6",
      name: "David Guetta & Bebe Rexha",
      genre: ["EDM", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb534799d86c69592c48d1c986",
    },
    user: {
      id: "user_e1f9a8b7c6d5",
      name: "Samantha King",
      profilePic: "https://example.com/images/samantha_king.jpg",
    },
  },
  {
    lastStreamedOn: "2024-02-26T22:50:00Z",
    streamCount: 70,
    revenueSource: "subscriptions",
    song: {
      id: "song_r8s9t0u1v2w3",
      name: "Escapism.",
      genre: ["UK Garage", "R&B"],
      pic: "https://thewarrioronline.com/wp-content/uploads/2021/02/escapism.png",
    },
    artist: {
      id: "artist_1f9a8b7c6d5e",
      name: "RAYE ft. 070 Shake",
      genre: ["R&B", "Alternative R&B"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb46a1408315461884a74d3432",
    },
    user: {
      id: "user_a8b7c6d5e1f9",
      name: "Kevin Turner",
      profilePic: "https://example.com/images/kevin_turner.jpg",
    },
  },
  {
    lastStreamedOn: "2024-02-25T14:00:00Z",
    streamCount: 105,
    revenueSource: "ads",
    song: {
      id: "song_s9t0u1v2w3x4",
      name: "Rich Flex",
      genre: ["Hip Hop", "Trap"],
      pic: "https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad",
    },
    artist: {
      id: "artist_6d5e1f9a8b7c",
      name: "Drake & 21 Savage",
      genre: ["Hip Hop", "Trap"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb4a9a9756c9d599f563f9a58a",
    },
    user: {
      id: "user_c6d5e1f9a8b7",
      name: "Olivia Martinez",
      profilePic: "https://example.com/images/olivia_martinez.jpg",
    },
  },
  {
    lastStreamedOn: "2024-02-24T10:10:00Z",
    streamCount: 66,
    revenueSource: "subscriptions",
    song: {
      id: "song_t0u1v2w3x4y5",
      name: "Players",
      genre: ["Hip Hop", "Pop Rap"],
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3ZWoyZAkjWtce6tJyDHcr7n1qrfsClILSw&s",
    },
    artist: {
      id: "artist_8b7c6d5e1f9a",
      name: "Coi Leray",
      genre: ["Hip Hop", "Pop"],
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Coi_Leray_in_2022.jpg/330px-Coi_Leray_in_2022.jpg",
    },
    user: {
      id: "user_9e8f7a1b2c3d",
      name: "Christopher Clark",
      profilePic: "https://example.com/images/christopher_clark.jpg",
    },
  },
];

const TOP_SONGS_MONTHLY: ISongInfo[] = [
  {
    lastStreamedOn: "2024-03-16T14:00:00Z",
    streamCount: 150,
    revenueSource: "subscriptions",
    song: {
      id: "song_5a3b1c2d9e8f",
      name: "Flowers",
      genre: ["Pop", "Disco"],
      pic: "https://i1.sndcdn.com/artworks-YOSTbh90ESawTlzu-s9fROg-t500x500.jpg",
    },
    artist: {
      id: "artist_1f9e2d3c8b7a",
      name: "Miley Cyrus",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_c7b8a9f0e1d2",
      name: "Ava Rodriguez",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T13:30:00Z",
    streamCount: 195,
    revenueSource: "subscriptions",
    song: {
      id: "song_9d5e1f2a8b3c",
      name: "Kill Bill",
      genre: ["R&B", "Pop"],
      pic: "https://static.wixstatic.com/media/d19474_ba8c85461372468fb2a38c5e87bc88d4~mv2.png/v1/fill/w_568,h_694,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d19474_ba8c85461372468fb2a38c5e87bc88d4~mv2.png",
    },
    artist: {
      id: "artist_3b7a9c1d2e8f",
      name: "SZA",
      genre: ["R&B", "Soul"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_e1d2c3b4a5f9",
      name: "Ethan Carter",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T13:00:00Z",
    streamCount: 140,
    revenueSource: "ads",
    song: {
      id: "song_7c8d9a1b2e3f",
      name: "Boy's a liar Pt. 2",
      genre: ["Drill", "Pop"],
      pic: "https://i1.sndcdn.com/artworks-YxoDyAlg4DABlWMW-30Xl8Q-t500x500.jpg",
    },
    artist: {
      id: "artist_b4a5f6e7d8c9",
      name: "PinkPantheress & Ice Spice",
      genre: ["Pop", "Drill"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_f9e1d2c3b4a5",
      name: "Isabella Nguyen",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T12:30:00Z",
    streamCount: 135,
    revenueSource: "subscriptions",
    song: {
      id: "song_3e2f1a9d8c7b",
      name: "Calm Down (Remix)",
      genre: ["Afrobeats", "Pop"],
      pic: "https://i1.sndcdn.com/artworks-bZoe0y2USPuXyf3Y-7MGOhg-t500x500.jpg",
    },
    artist: {
      id: "artist_a5f9e1d2c3b4",
      name: "Rema & Selena Gomez",
      genre: ["Afrobeats", "Pop"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_9c8d7e6f5a1b",
      name: "Jackson Davis",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T12:00:00Z",
    streamCount: 130,
    revenueSource: "ads",
    song: {
      id: "song_d8c9b7a5f1e2",
      name: "Die For You (Remix)",
      genre: ["R&B", "Pop"],
      pic: "https://i.pinimg.com/736x/5d/e1/1b/5de11b50a336224f47229eb0daa016e4.jpg",
    },
    artist: {
      id: "artist_e6f5a1b9c8d7",
      name: "The Weeknd & Ariana Grande",
      genre: ["R&B", "Pop"],
      profilePic:
        "https://i.scdn.co/image/ab6761610000e5eb489c7554426841df220f3762",
    },
    user: {
      id: "user_a1b9c8d7e6f5",
      name: "Sophia Wilson",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
];

const TOP_SONGS_YEARLY: ISongInfo[] = [
  {
    lastStreamedOn: "2024-03-16T11:30:00Z",
    streamCount: 125,
    revenueSource: "subscriptions",
    song: {
      id: "song_2a1b9c8d7e6f",
      name: "Last Night",
      genre: ["Country", "Pop"],
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oTu1FWAGWc7m9JKhpeHnfZJTojaXhnhIUQ&s",
    },
    artist: {
      id: "artist_f5e1d2c3b4a9",
      name: "Morgan Wallen",
      genre: ["Country", "Pop Country"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_d8c7b9a1f5e2",
      name: "Liam Garcia",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T11:00:00Z",
    streamCount: 120,
    revenueSource: "ads",
    song: {
      id: "song_c3d4e5f9a1b2",
      name: "As It Was",
      genre: ["Pop", "Synth-pop"],
      pic: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
    },
    artist: {
      id: "artist_9e8f7a1b2c3d",
      name: "Harry Styles",
      genre: ["Pop", "Rock"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_7a5f1e9d8c2b",
      name: "Mia Rodriguez",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T10:30:00Z",
    streamCount: 115,
    revenueSource: "subscriptions",
    song: {
      id: "song_e8f7a5b1c9d2",
      name: "Creepin'",
      genre: ["Hip-Hop", "R&B"],
      pic: "https://images.genius.com/39ed2f969ac708000277af69349818c4.1000x872x1.jpg",
    },
    artist: {
      id: "artist_c2d3e4f5a1b9",
      name: "Metro Boomin, The Weeknd & 21 Savage",
      genre: ["Hip-Hop", "Trap"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_b4a9c8d7e6f5",
      name: "Noah Adams",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T10:00:00Z",
    streamCount: 110,
    revenueSource: "ads",
    song: {
      id: "song_a1b2c3d9e8f7",
      name: "Unholy",
      genre: ["Pop", "Dark Pop"],
      pic: "https://c.saavncdn.com/725/Unholy-English-2022-20220922233621-500x500.jpg",
    },
    artist: {
      id: "artist_7a9c8d2e1f5b",
      name: "Sam Smith & Kim Petras",
      genre: ["Pop", "Vocal Pop"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_f5e2d1c3b4a9",
      name: "Chloe Baker",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
  {
    lastStreamedOn: "2024-03-16T09:30:00Z",
    streamCount: 105,
    revenueSource: "subscriptions",
    song: {
      id: "song_9c8d7e6f1a2b",
      name: "Anti-Hero",
      genre: ["Pop", "Folk-Pop"],
      pic: "https://images.genius.com/1d7e96eea4ff84d3a0f67ad2920dddd6.1000x1000x1.jpg",
    },
    artist: {
      id: "artist_d1c2b9a5f6e7",
      name: "Taylor Swift",
      genre: ["Pop", "Country"],
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
    user: {
      id: "user_3b4a9c8d7e6f",
      name: "Daniel Perez",
      profilePic:
        "https://lh3.googleusercontent.com/gg-dl/AA8i_VLr0t7Nj44b5cP_UzYKpBnKCq2AYKU1f_69uqBdnr9wEnn7Gw3dkN5dZft7a5hfewpZhWjONGw5GaC2sZmNdiiFSQSq_uCsI3bEhEHDubKNCw2sue9MG_Ug4ECo5aMOfEFDlcgovNNzK-vV6rJflWIBVEob6-jC_5y77y3xmhdEPDvNTg",
    },
  },
];

const TOP_SONGS: Record<IPeriod, ISongInfo[]> = {
  [IPeriod.Monthly]: TOP_SONGS_MONTHLY,
  [IPeriod.Yearly]: TOP_SONGS_YEARLY,
};

const TOP_ARTIST: ITopArtist = {
  id: "artist_d1c2b9a5f6e7",
  name: "Taylor Swift",
  genre: ["Pop", "Country"],
  profilePic:
    "https://i.pinimg.com/1200x/fe/d7/9a/fed79a5e7fcb0aceb8d17059e7bd5f4c.jpg",
  totalStreams: 289741,
};

export const SONGS_RECENT_OUTPUT = RECENT_SONGS;

export const SONGS_HITS_OUTPUT = TOP_SONGS;

export const SONGS_TOP_ARTIST = TOP_ARTIST;

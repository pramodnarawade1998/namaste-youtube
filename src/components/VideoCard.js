function VideoCard({ videoInfo }) {
  // console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg h-full">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
}

export const AdVideoCard = ({ videoInfo }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard videoInfo={videoInfo} />
    </div>
  );
};

export default VideoCard;

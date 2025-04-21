interface VideoCarouselProps {
    videos: string[];
}
  
export default function VideoCarousel({ videos }: VideoCarouselProps) {
    return (
      <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory py-4">
        {videos.map((src, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[300px] bg-gray-100 rounded"
          >
            <video
              src={src}
              controls
              className="w-full max-w-[700px] h-auto max-h-[200px] rounded"
            />
          </div>
        ))}
      </div>
    );
}
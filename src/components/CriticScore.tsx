
interface Props{
    score: number;
}
export default function CriticScore({score}:Props) {
  return (
    <>
    {score >= 90? <span className="bg-green-100 text-green-800 text-xs
     font-medium px-2 pt-1  rounded-sm dark:bg-gray-700 dark:text-green-400 
     border border-green-400">{score}</span> : 
     score >= 80? <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 pt-1 rounded-sm dark:bg-gray-700 dark:text-yellow-300 border 
      border-yellow-300">{score}</span> : 
      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 pt-1 rounded-sm dark:bg-gray-700 dark:text-red-400 border 
      border-red-400">{score}</span>
     }
    </>
  )
}

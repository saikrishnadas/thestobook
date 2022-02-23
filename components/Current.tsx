import styles from "../styles/NavContainer.module.scss";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { currentAtom } from "../atoms/currentAtom";
import { BookProps } from "../utils/typings";
import Image from "next/image";

function Current() {
  const currentBook = useRecoilValue<BookProps | null>(currentAtom);

  return (
    <div className={styles.current__container}>
      <h3>Current Reading Book</h3>
      {currentBook && (
        <Link href="reading">
          <div className={styles.current__reading}>
            <div className={styles.current__image}>
              <Image
                src={currentBook.img}
                alt="currentbook image"
                width={63}
                height={93}
                objectFit="cover"
              />
            </div>
            <div>
              <p>{currentBook?.name}</p>
              <p>{currentBook?.author}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Current;

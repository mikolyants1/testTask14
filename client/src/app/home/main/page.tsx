
import { getProducts } from "@/components/helpers/api/query/products/getProducts";
import { IProduct } from "@/components/types/type";
import styles from '@/components/style/main.module.css';
import MainMapCard from "@/components/ui/views/home/main/MainMapCard";

async function page():Promise<JSX.Element> {
  const products:IProduct[] = await getProducts();
  return (
    <main className={styles.container}>
      <MainMapCard data={products} />
    </main>
  )
}

export default page
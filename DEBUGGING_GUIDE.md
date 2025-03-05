# Guía de Debugging en Next.js con Chrome DevTools

## 1. Preparación del entorno
1. Ejecuta tu aplicación en modo desarrollo:
```bash
npm run dev
```

## 2. Entendiendo el flujo de datos con mockData en page.tsx

### 2.1 Cómo se establece la información de mockData

En Next.js, los datos simulados (mock data) se manejan a través de estados de React y se renderizan en componentes. Veamos cómo funciona en page.tsx:

1. **Definición de estados iniciales**:
   ```jsx
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   ```

2. **Obtención de datos con useEffect**:
   ```jsx
   useEffect(() => {
     const fetchProducts = async () => {
       try {
         setLoading(true);
         // Simulated API call with 1s delay
         await new Promise(resolve => setTimeout(resolve, 1000));
         
         const mockData = [
           // Array de productos simulados
           {
             id: 1,
             name: 'Alpha BRAIN',
             brand: 'Onnit',
             details: '30 capsules',
             image: '/placeholder.svg'
           },
           // más productos...
         ];

         setProducts(mockData as any);
         setError(null);
       } catch (err) {
         setError('Error fetching products' as any);
       } finally {
         setLoading(false);
       }
     };

     fetchProducts();
   }, []);
   ```

3. **Renderizado condicional basado en estados**:
   ```jsx
   {loading && (
     <div className="col-span-full text-center py-4">
       Loading products...
     </div>
   )}

   {error && (
     <div className="col-span-full text-center py-4 text-red-500">
       {error}
     </div>
   )}

   {!loading && !error && products.map((product) => (
     <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm flex items-center">
       <div className="w-24 h-24 flex-shrink-0 relative">
         <Image
           src={product.image}
           alt={product.name}
           width={96}
           height={96}
           className="object-contain"
         />
       </div>
       <div className="ml-4 flex-1">
         <h3 className="text-xl font-bold text-black">{product.name}</h3>
         <p className="text-gray-600">{product.brand}</p>
         {product.details && <p className="text-gray-500">{product.details}</p>}
       </div>
       <div className="ml-auto">
         <div className="bg-gray-200 p-2 rounded-full">
           <Lock className="h-5 w-5 text-gray-500" />
         </div>
       </div>
     </div>
   ))}
   ```

### 2.2 Debugging del flujo de datos con Chrome DevTools

1. **Inspeccionar estados de componentes**:
   - Abre Chrome DevTools (F12 o Ctrl+Shift+I)
   - Ve a la pestaña "Components" (necesitas la extensión React Developer Tools)
   - Selecciona el componente Home para ver sus estados (products, loading, error)

2. **Seguimiento de cambios de estado**:
   - Coloca `console.log` estratégicos para seguir el flujo:
     ```jsx
     useEffect(() => {
       console.log("Estado inicial:", { products, loading, error });
       // resto del código
     }, []);
     ```
   - Observa los logs en la consola de DevTools

3. **Simular diferentes escenarios**:
   - Modifica mockData para probar diferentes respuestas
   - Simula errores cambiando el código:
     ```jsx
     // Para simular un error:
     throw new Error("Error simulado");
     ```

4. **Depurar renderizado condicional**:
   - Usa los breakpoints de DevTools en las secciones de renderizado
   - Inspecciona las variables products, loading y error
   - Verifica que las condiciones de renderizado funcionen correctamente

5. **Network Throttling**:
   - En DevTools, ve a la pestaña Network
   - Usa el dropdown de throttling para simular conexiones lentas
   - Observa cómo se comporta el estado de loading
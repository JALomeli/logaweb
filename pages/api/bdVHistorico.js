
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req,res){
    const {method, body,query}=req;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db=client.db();
    const ventas =db.collection('ventasHistorico');

    switch(method){
        case "POST":
            console.log(body);
            const dataVentas = {
                nombre: body.nombre,
                apellido: body.apellido,
                kiloReposteria: body.kiloReposteria,
                mediokiloReposteria: body.mediokiloReposteria,
                cuartokiloReposteria: body.cuartokiloReposteria,
                diaPedido: body.diaPedido,
                diaEntrega: body.diaEntrega,
                ciudadEntrega: body.ciudadEntrega

            }
            try {
                const answer= await ventas.insertOne(dataVentas);
                return res.status(200).json({message:"La venta fue agregada"});
            } catch (error) {
                return res.status(500).json({message:"Sucedio un error"});
            }
            break;
        case "GET":
            const data = await ventas.find().toArray();
            return res.status(200).json(data);
            break;
            case "DELETE":
                const id = query.id;
                try {
                  const result = await ventas.deleteOne({ _id: new ObjectId(id) });
                  return res.status(200).json({ message: "Venta eliminada con éxito" });
                } catch (error) {
                  console.error(error);
                  return res.status(500).json({ message: "Error al eliminar la venta" });
                }
    }
}
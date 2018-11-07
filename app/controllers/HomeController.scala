package controllers

import javax.inject._

import scalikejdbc._

import play.api.libs.json.Json
import play.api.mvc._



@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def appSummary = Action {
    Ok(Json.obj("content" -> "Scala Play React Seed"))
  }

  def appLegoList = Action {
    // initialize JDBC driver & connection pool
    Class.forName("com.mysql.jdbc.Driver")
    ConnectionPool.singleton("jdbc:mysql://localhost/legos?characterEncoding=UTF-8", "root", "")

    // ad-hoc session provider on the REPL
    implicit val session = AutoSession

    val query: List[Map[String, Any]] = {
      sql"select id, name, completed from lego_kits;".map(_.toMap).list.apply()
    }

    Ok(Json.obj(
      "content" -> Json.toJsFieldJsValueWrapper(Json.obj(
        "list" -> query.map(row => Json.obj(
          "id" -> s"${row("id")}",
          "name" -> s"${row("name")}",
          "completed" -> s"${row("completed")}"
        ))
      ))
    ))
  }
}

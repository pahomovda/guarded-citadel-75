package controllers

import javax.script.ScriptEngineManager
import play.api.Play.current
import play.api._
import play.api.cache.Cached
import play.api.libs.concurrent.Execution.Implicits._
import play.api.mvc._
import play.twirl.api.Html
import scala.concurrent.Promise
import scala.util.{Failure, Success}

object Application extends Controller {

  def index(uri: String) = Action { request =>
     Ok(views.html.index(Html("Loading...")))
  }

  def api(action: String, id: Option[Int]) = Action { request =>

    val r = request.queryString
    Ok(views.html.index(Html(r.toString()+id.toString)))
  }
}
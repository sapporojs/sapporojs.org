Sapporojs.SearchResultController=Ember.ObjectController.extend({needs:["query"],isMatchedQueries:Ember.computed(function(){var e=this.get("title"),t=this.get("text"),r=this.get("controllers.query.searchQueries");return r.any(function(r){return e.match(r)||t.match(r)})}).property("controllers.query.content"),highlightQuery:Ember.computed(function(){var e=(this.get("summary_text"),this.get("controllers.query.searchQueries")),t=e.map(function(e){return e.source});return new RegExp(t.join("|"),"ig")}).property("controllers.query.content"),highlightSummary:Ember.computed(function(){var e=this.get("summary_text"),t=this.get("highlightQuery"),r=e.replace(t,function(e){return"<strong><i>"+e+"</i></strong>"});return Ember.String.htmlSafe(r)}).property("summary_text","controllers.query.content")});